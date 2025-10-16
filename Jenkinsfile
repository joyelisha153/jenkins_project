pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Pull code from GitHub
                git branch: 'main', url: 'https://github.com/joyelisha153/jenkins_project.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                // Install Node packages
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                // Run Jest tests
                sh 'npm test'
            }
        }

        stage('Build Artifact') {
            steps {
                // Create build folder if it doesn't exist
                sh 'mkdir -p build'
                // Zip all files into artifact.zip
                sh 'zip -r build/artifact.zip *'
                // Archive artifact in Jenkins
                archiveArtifacts artifacts: 'build/artifact.zip', fingerprint: true
            }
        }
    }

    post {
        success {
            echo 'Pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed. Check the logs.'
        }
    }
}
