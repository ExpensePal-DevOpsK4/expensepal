pipeline {
    agent any

    environment {
        DEPLOY_DIR = '/var/www/html'
        REMOTE_USER = 'ubuntu'
        REMOTE_HOST = '13.50.15.123'
        SSH_KEY = '/var/lib/jenkins/.ssh/frontend_key'
    }

    stages {
        stage('Checkout') {
            when {
                 branch 'develop'  
            }
            steps {
                echo 'Cloning repository...'
                checkout scm 
            }
        }

        stage('Install Dependencies') {
            when {
                 branch 'develop'  
            }
            steps {
                echo 'Installing frontend dependencies...'
                dir('frontend') {
                    script {
                        timeout(time: 10, unit: 'MINUTES') {
                            sh 'yarn install --network-timeout 300000'
                        }
                    }
                }
            }
        }

        stage('Run Tests') {
            when {
                 branch 'develop'  
            }
            steps {
                dir('frontend') {
                    echo 'Running frontend tests...'
                    script {
                        timeout(time: 10, unit: 'MINUTES') {
                            sh 'yarn test'
                        }
                    }
                }
            }
        }

        stage('Build Frontend') {
            when {
                 branch 'develop'  
            }
            steps {
                dir('frontend') {
                    echo 'Building frontend app...'
                    script {
                        timeout(time: 10, unit: 'MINUTES') {
                            sh 'yarn run build'
                        }
                    }
                }
            }
        }

        stage('Deploy to EC2') {
            when {
                 branch 'develop'  
            }
            steps {
                echo 'Deploying build to frontend server...'
                sshagent(credentials: ['frontend-ssh-key']) {
                    script {
                        timeout(time: 5, unit: 'MINUTES') {
                            sh """
                                ssh -o StrictHostKeyChecking=no -i ${SSH_KEY} ${REMOTE_USER}@${REMOTE_HOST} 'sudo rm -rf ${DEPLOY_DIR}/*'
                                scp -i ${SSH_KEY} -r frontend/dist/* ${REMOTE_USER}@${REMOTE_HOST}:/tmp/
                                ssh -i ${SSH_KEY} ${REMOTE_USER}@${REMOTE_HOST} 'sudo cp -r /tmp/* ${DEPLOY_DIR}/'
                            """
                        }
                    }
                }
            }
        }

        stage('Restart Nginx') {
            when {
                 branch 'develop'  
            }
            steps {
                echo 'Restarting Nginx on frontend server...'
                sshagent(credentials: ['frontend-ssh-key']) {
                    script {
                        timeout(time: 5, unit: 'MINUTES') {
                            sh """
                                ssh -i ${SSH_KEY} ${REMOTE_USER}@${REMOTE_HOST} 'sudo systemctl restart nginx'
                            """
                        }
                    }
                }
            }
        }
    }

    post {
        success {
            echo 'Frontend deployment successful :)'
        }
        failure {
            echo 'Frontend deployment failed :('
        }
        always {
            cleanWs()
        }
    }
}
