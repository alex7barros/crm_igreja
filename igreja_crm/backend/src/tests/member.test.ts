
import request from 'supertest';
import app from '../src/app';

describe('Member Endpoints', () => {
  it('should create a member', async () => {
    const res = await request(app).post('/members').send({
      name: 'Jane Doe',
      birthdate: new Date(),
      gender: 'Female',
      contact: '1234567890',
      address: '456 Church St',
      family: 'Doe Family',
      status: 'Active',
      photo: 'photo_url'
    });

    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty('id');
  });
});
                