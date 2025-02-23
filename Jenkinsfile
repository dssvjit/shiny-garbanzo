pipeline{
    agent any 

    tools {
        nodejs 'nodejs'
    }

    environment {
        AWS_REGION = 'ap-south-1' 
        S3_BUCKET = 'shiny-garbanzo' 
    } 

    stages{
        stage('Install'){
            steps{
                sh 'npm install'
            }
        }

        stage("Build"){
            steps{
                sh 'npm run build'
            }
        }

        stage('S3 Deploy') {
            steps {
                sh "aws s3 sync dist/ s3://${S3_BUCKET} --delete --region ${AWS_REGION}"
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
