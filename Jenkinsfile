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
                sh(script: 'export DOCKER_BUILDKIT=1')
                sh(script: 'docker buildx version')
                sh(script: 'docker buildx create --use')
                sh(script: 'docker login -u docker-repo -p 123 https://nd.begoingdev.me')
                sh(script: 'docker build -t nd.begoingdev.me/nextjen:0.0.4 --push .')
                sh(script: 'docker images -a')
            }
        }
    }
}