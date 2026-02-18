pipeline {
    agent any
 
    tools {
        nodejs 'node18'   // Make sure you configure this in Global Tool Configuration
    }
 
    environment {
        REPO_URL = 'https://github.com/veerendrabijib/Angular.git'
        BRANCH_NAME = 'main'
    }
 
    options {
        skipDefaultCheckout(true)
    }
 
    stages {
 
        stage('Checkout Branch') {
            steps {
                echo "Checking out ${BRANCH_NAME} branch..."
                git branch: "${BRANCH_NAME}", url: "${REPO_URL}"
            }
        }
 
        stage('Verify Node & NPM') {
            steps {
                sh 'node -v'
                sh 'npm -v'
            }
        }
 
        stage('Install Dependencies') {
            steps {
                echo "Installing node modules..."
                sh 'npm install'
            }
        }
 
        stage('Build Angular Project') {
            steps {
                echo "Building Angular project..."
                sh 'npm run build'
            }
        }
    }
 
    post {
        success {
            echo "✅ Pipeline Completed Successfully"
        }
        failure {
            echo "❌ Pipeline Failed"
        }
        always {
            cleanWs()
        }
    }
}