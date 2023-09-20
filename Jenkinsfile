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
                sh(script: """
                    docker images -a
                    docker build -t jenkins-pipeline:latest .
                    docker images -a
                """)
            }
        }
    }
}