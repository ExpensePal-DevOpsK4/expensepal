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
                    sh 'npm install'
                }
            }
        }

}
}
