import { DynamoDB } from '../../../aws'

export default async(params) => {
    console.log('Hola Create User', DynamoDB)
    console.log('Params', params)

    const {firstName, lastName} = params.Data

    const Item = {
        firstName,
        lastName
    }

    const CreateUserInDynamoDB = await DynamoDB.CreateUser({
        Record: {
            ResourceID: '234',
            ResourceName: "PERSON",
        },
        Item: Item
    })

    console.log(CreateUserInDynamoDB)

}