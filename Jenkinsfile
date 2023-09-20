pipeline {
    agent any
    stages {
        stage('Verify Branch') {
            steps {
                echo "$GIT_BRANCH"
            }
        }
        stage('Docker build') {
            steps {
                sh(script: 'ls -at')
                sh(script: 'docker images')
                sh(script: 'ls -at')
            }
        }
    }
}