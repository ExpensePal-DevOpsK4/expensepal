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
                    sh 'npm install' // ensures that test-only deps are present
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

     post {
        success {
            echo 'Deployment successful!'
        }
        failure {
            echo 'Deployment failed.'
        }
    }
}




