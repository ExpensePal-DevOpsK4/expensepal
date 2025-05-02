pipeline {
    agent any

    environment {
        DEPLOY_DIR = '/var/www/html'
    }

    stages {
        stage('Checkout Code') {
            steps {
                echo 'Cloning repository...'
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Installing frontend dependencies...'
                dir('frontend') {
                    sh 'yarn install'
                }
            }
        }

        stage('Run Tests') {
                steps {
                    dir('frontend') {
                        echo 'Running frontend tests...'
                        sh 'yarn test'
                    }
                }
    }

        stage('Build Frontend') {
            steps {
                dir('frontend') {
                    echo 'Building frontend app...'
                    sh 'yarn build --verbose'
                }
            }
        }

        stage('Deploy Build') {
            steps {
                echo 'Deploying to server...'
                script {
                    sh """
                    sudo rm -rf ${DEPLOY_DIR}/*
                    sudo cp -r frontend/dist/* ${DEPLOY_DIR}/
                    """
                }
            }
        }

        stage('Restart Nginx') {
            steps {
                echo 'Restarting Nginx...'
                sh 'sudo systemctl restart nginx'
            }
        }
    }

    post {
        success {
            echo 'Deployment Successful :)'
        }
        failure {
            echo 'Deployment Failed :('
        }
    }

}

