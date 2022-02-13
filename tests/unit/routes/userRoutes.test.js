const request = require('supertest')
const app = require('../../../src/index.js')



describe('Post Endpoints', () => {
  
  it('should create a new token', async () => {
    const res = await request(app)
      .post('/api/v1/users/login')
      .send({
        username: 'tikur tech',
        password: 'tikur12345',
      })
    expect(res.statusCode).toEqual(200)
    expect(res.body.user_nicename).toEqual("tikur tech")
   
  })
})


describe('Post Endpoints', () => {
  it('should  not create a new token', async () => {
    const res = await request(app)
      .post('/api/v1/users/login')
      .send({
        username: 'tikur techh',
        password: 'tikur12345',
      })
    expect(res.statusCode).toEqual(200)
    expect(res.body.name).toEqual('Error')
   
   
  })
})
