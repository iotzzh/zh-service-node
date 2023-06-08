import express from 'express'
import * as path from 'path'
import swaggerJsdoc from 'swagger-jsdoc'
import * as swaggerUi from 'swagger-ui-express'
import busboy from 'connect-busboy'

import definition from './server-spec.json'
import multimediaRouter from './routes/multimedia.route'

const init = async () => {
  // Configure Swagger
  const options = {
    definition,
    apis: [path.resolve(__dirname, './routes/*.ts'), path.resolve(__dirname, './routes/*.js')]
  }
  const openapiSpecification = swaggerJsdoc(options)

  // Configure routes
  const app = express()
  app.use(busboy())
  app.use(multimediaRouter)
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openapiSpecification))

  // Configure Minio.io Bucket
  try {
    console.log('Connecting to Minio.io server..')
    console.log('Connected!')
  } catch (error) {
    console.error(error)
    process.exit(0)
  }

  // Run API
  app.listen(7000, () => {
    console.log('Server listening in http://localhost:7000')
    console.log('- API Docs in http://localhost:7000/api-docs')
  })
}

init()
