import { Request, Response } from 'express'

export const getMultimedia = async (req: Request, res: Response) => {
  res.send('test get')
}

export const postMultimedia = async (req: Request, res: Response) => {
  res.send('test')
}

export const deleteMultimedia = async (req: Request, res: Response) => {
  const { name } = req.params
  try {
    res.send({ message: 'File removed' })
  } catch (error) {
    res.status(500).send({ code: 500, message: error })
  }
}


// router.post('/chat-process', [auth, limiter], async (req, res) => {
//   res.setHeader('Content-type', 'application/octet-stream')

//   try {
//     const { prompt, options = {}, systemMessage, temperature, top_p } = req.body as RequestProps
//     // let firstChunk = true
//     globalThis.console.log('options:', JSON.stringify(options))
//     // await chatReplyProcess({
//     //   message: prompt,
//     //   lastContext: options,
//     //   process: (chat: ChatMessage) => {
//     //     res.write(firstChunk ? JSON.stringify(chat) : `\n${JSON.stringify(chat)}`)
//     //     firstChunk = false
//     //   },
//     //   systemMessage,
//     //   temperature,
//     //   top_p,
//     // })
//   }
//   catch (error) {
//     res.write(JSON.stringify(error))
//   }
//   finally {
//     res.end()
//   }
// })

// router.get('/test', async (req, res) => {
//   res.send('hello world')
// })