pipeline {
    agent any

    environment {
        NODE_ENV = 'production'
    }

    stages {
        stage('Checkout') {
            steps {
                echo 'Cloning repository...'
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Installing backend dependencies.....'
                dir('backend') {
                    sh 'npm install'
                }
            }
        }
        
        stage('Run Tests') {
            environment {
                NODE_ENV = 'test'
            }
            steps {
                echo 'Running tests...'
                dir('backend') {
                    sh 'npm install'
                    sh 'npm test'
                }
            }
            post {
                success {
                    echo 'Tests passed!'
                }
                failure {
                    echo 'Tests failed. Stopping pipeline.'
                    error 'Tests failed, pipeline halted.'
                }
            }
        }

        stage('Deploy to Backend Server') {
            steps {
                echo 'Deploying to backend server via SSH...'
                sshagent(['backend-ssh-key']) {
                    sh """
                    ssh ubuntu@16.171.165.69'
                        cd /home/ubuntu/expensepal/backend &&
                        git pull &&
                        npm install &&
                        pm2 delete backend || true &&
                        pm2 start server.js --name backend
                    '
                    """
                }
            }
        }
    }
    }

     post {
        success {
            echo 'Deployment successful :)'
        }
        failure {
            echo 'Deployment failed :('
        }
    }





