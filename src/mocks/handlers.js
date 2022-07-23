import { rest } from 'msw'

export const handlers = [
  /**
   * Example of a request handler—function that captures a request
   * and declares which mocked response to return upon match.
   * @see https://mswjs.io/docs/basics/request-handler
   */
  rest.get('https://made.up/api/usage', (req, res, ctx) => {
    return res(
      ctx.status(301),
      ctx.json({
        id: 1,
        firstName: 'John',
      }),
    )
  }),
]
