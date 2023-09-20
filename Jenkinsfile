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
                sh(script: 'time docker build --progress=plain -t nd.begoingdev.me/nextjen:0.0.1 -f Dockerfile .')
                // sh(script: 'docker login -u docker-repo -p 123 https://nd.begoingdev.me')
            }
        }
    }
}