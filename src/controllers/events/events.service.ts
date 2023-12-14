import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Events } from './events.schema';
import { Model } from 'mongoose';


@Injectable()
export class EventService {
  constructor(@InjectModel(Events.name) private eventModel: Model<Events>) { }

  async createUser(body: Record<string, any>) {
    try {
      let created = await this.eventModel.create(body)
      if(created) {
        return {message:"Record Created Successfully"}
      }
    } catch (error) {
      throw new Error(error)
    }
  }

  async getUser(query:Record<string,any>) {
    try {
      let page  = Number(query.page) || 1
      let limit = Number(query.perPage) || 3
      let skip = (page-1) * limit
      let data = await this.eventModel.find().skip(skip).limit(limit);
      if(data) {
        return {message:"Success", data}
      }
    } catch (error) {
      throw new Error(error)
    }
  }
}
