pipeline {
    agent any
    environment {
        REPO_URL = 'https://github.com/veerendrabijib/Angular.git'
        BRANCH_NAME = 'main'
    }
    stages {
        stage('Checkout Master Branch') {
            steps {
                script {
                    try {
                        git branch: "${BRANCH_NAME}", url: "${REPO_URL}"
                        echo "Checkout successful"
                    } catch (Exception e) {
                        error("Checkout failed: ${e.getMessage()}")
                    }
                }
            }
        }
 
        stage('Pull Latest Code') {
            steps {
                script {
                    try {
                        sh 'git pull origin main'
                        echo "Code pulled successfully"
                    } catch (Exception e) {
                        error("Git pull failed: ${e.getMessage()}")
                    }
                }
            }
        }
 
        stage('Install Node Modules') {
            steps {
                script {
                    try {
                        sh 'npm install'
                        echo "Node modules installed successfully"
                    } catch (Exception e) {
                        error("npm install failed: ${e.getMessage()}")
                    }
                }
            }
        }
 
        stage('Serve Angular Project') {
            steps {
                script {
                    try {
                        sh 'npm install -g @angular/cli'
                        sh 'ng serve --host 0.0.0.0 --port 4200 &'
                        echo "Angular project is serving"
                    } catch (Exception e) {
                        error("Angular serve failed: ${e.getMessage()}")
                    }
                }
            }
        }
    }
 
    post {
        failure {
            echo "Pipeline Failed ❌"
            echo "Check console output for error details."
        }
 
        success {
            echo "Pipeline Completed Successfully ✅"
        }
    }
}