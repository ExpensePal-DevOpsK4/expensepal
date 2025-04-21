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

           stage('Restart Application') {
            steps {
                echo 'Restarting application with PM2....'
                dir('backend') {
                    sh '''
                        pm2 delete backend || true
                        pm2 start app.js --name backend
                    '''
                }
            }
        }
    }



