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
                sh(script: 'docker images -a')
                // sh(script: """
                //     cd jenkins-ci-testing/
                //     docker images -a
                //     docker build -t jenkins-pipeline .
                //     docker images -a
                //     cd ..
                // """)
            }
        }
    }
}