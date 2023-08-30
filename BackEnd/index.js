import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

const typeDefs = `#graphql

    input CreateBoardInput {
        writer: String
        title: String
        contents: String
    }

    type BoardReturn {
        number: Int
        writer: String
        title: String
        contents: String
    }


    type Query {
        fetchBoards: [BoardReturn] # BoardReturn 은 백엔드에서 프론트로 내보내는 타입이다. 그래서 type 이 그대로 type 이다.
    }

    type Mutation {
        createBoard(writer:String, title:String, contents:String): String
        createBoard2(createBoardInput: CreateBoardInput): String # CreateBoardInput 은 프론트에서 받아오는 타입이므로 타입이 input 이다.
    }
`

const resolvers = {
    Query: {
        fetchBoards: () => {
            const result = [
                {number: 1, writer: '김채원', title: '너 내 동료가 되어라', contents: '저는 쫌 귀여워요'},
                {number: 2, writer: '미야와키 사쿠라', title: '너 내 동료가 되어라', contents: '저는 쫌 귀여워요'},
                {number: 3, writer: '나카무라 카즈하', title: '너 내 동료가 되어라', contents: '저는 쫌 귀여워요'}
            ]

            return result;
        },
    },

    Mutation: {
        createBoard: (_, args) => {
            return '등록에 성공하셨어요'
        },

        createBoard2: (_, args) => {
            return '등록에 성공하셨어요'
        }
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

const { url } = await startStandaloneServer(server);
console.log(`🚀 Server ready at ${url}`);