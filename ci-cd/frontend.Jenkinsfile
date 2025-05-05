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
            steps {
                echo 'Cloning repository...'
                checkout([
                    $class: 'GitSCM',
                    branches: [[name: '*/develop']],
                    userRemoteConfigs: [[url: 'https://github.com/ExpensePal-DevOpsK4/expensepal.git']]
                ])
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Installing frontend dependencies...'
                dir('frontend') {
                    sh 'npm install'
                }
            }
        }

        stage('Run Tests') {
            steps {
                dir('frontend') {
                    echo 'Running frontend tests...'
                        sh 'npm test'
                }
            }
        }

        stage('Build Frontend') {
            steps {
                dir('frontend') {
                    echo 'Building frontend app...'
                    sh 'npm build'
                }
            }
        }

        stage('Deploy to EC2') {
            steps {
                echo 'Deploying build to frontend server...'
                sshagent(credentials: ['frontend-ssh-key']) {
                    sh """
                        ssh -o StrictHostKeyChecking=no -i ${SSH_KEY} ${REMOTE_USER}@${REMOTE_HOST} 'sudo rm -rf ${DEPLOY_DIR}/*'
                        scp -i ${SSH_KEY} -r frontend/dist/* ${REMOTE_USER}@${REMOTE_HOST}:/tmp/
                        ssh -i ${SSH_KEY} ${REMOTE_USER}@${REMOTE_HOST} 'sudo cp -r /tmp/* ${DEPLOY_DIR}/'
                    """
                }
            }
        }

        stage('Restart Nginx') {
            steps {
                echo 'Restarting Nginx on frontend server...'
                sshagent(credentials: ['frontend-ssh-key']) {
                    sh """
                        ssh -i ${SSH_KEY} ${REMOTE_USER}@${REMOTE_HOST} 'sudo systemctl restart nginx'
                    """
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
    }
}
