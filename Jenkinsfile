pipeline {
    agent any

    tools {nodejs "node16132"}

    stages {
        stage("Limpiar directorio"){
            steps {
                deleteDir()
            }
        }
        stage("Clone Repositorio"){
            steps {
                git 'https://github.com/elGiank/node-ts-sonarq-jenkins-postman.git'
            }
        }
        stage("Instalar dependencias"){
            steps {
                sh "npm install"
            }
        }
        stage("Ejecutar Test Unitarios"){
            steps {
                sh "npm test"
            }
        }
        stage("Analisis de Sonar"){
            environment {
                scannerHome = tool 'sonarqscaner'
            }
            steps {
                withSonarQubeEnv('local-soanrq') {
                    sh '''
                    ${scannerHome}/bin/sonar-scanner \
                    -D sonar.login=46b2a69c0528c280757c3e53f836c333d7157715 \
                    -D sonar.projectKey=46b2a69c0528c280757c3e53f836c333d7157715 \
                    -D sonar.projectName=ts-sonarq \
                    -D sonar.sources=src \
                    -D sonar.test=src \
                    -D sonar.inclusions=** \
                    -D sonar.test.inclusions=src/**/*.spec.ts \
                    -D sonar.javascript.lcov.reportPaths=coverage/lcov.info \
                    -D sonar.testExecutionReportPaths=coverage/test-reporter.xml
                    '''
                }
            }
        }
        stage("Pruebas de API pos-despliegue") {
            steps {
                sh "npm run test:api"
            }
        }
    }
}