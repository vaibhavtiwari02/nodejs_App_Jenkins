pipeline {
    agent any

    stages {
        stage('Clone Repository') {
            steps {
                echo 'Cloning repository...'
                git 'https://github.com/vaibhavtiwari02/nodejs_App_Jenkins.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                echo 'Installing dependencies...'
                sh 'npm install'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying application...'
                sh 'node app.js &'  // Run the application in the background
            }
        }
        stage('Verify Application') {
            steps {
                echo 'Verifying application...'
                sh 'curl http://3.84.248.93:3000'  
            }
        }
    }
    post {
        success {
            echo 'Deployment successful!'
        }
        failure {
            echo 'Deployment failed!'
        }
    }
}
