pipeline {
    agent any
    stages{
        stage ('build'){
            steps{
                checkout scm
                sh 'npm install' // <1>
            }   
        }
        stage('chrome'){
            steps{
                sh 'npx playwright test --project=headless' // <4>
            }
        }
        stage('firefox'){
             steps{
                 sh 'npx playwright test --project=headless_firefox'
             }
        }
        stage('webkit'){
            steps{
                sh 'npx playwright test --project=headless_webkit'
            }
        }
    } 
}