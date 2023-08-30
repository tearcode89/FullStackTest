import {useMutation , gql} from "@apollo/client";

const CREATE_BOARD = gql`
    mutation {
        createBoard(writer: "강해린", title:"강해린씨 이상하다~~", contents: "쟤가 절 쳐다봐요~")
    }
`
export default function GraphqlMutation(): JSX.Element {

    const [MyFunction] = useMutation(CREATE_BOARD) //
    const onClickSubmit = async () => {
        const result = await MyFunction();
        console.log(result);
    }

    return(
        <>
            <button onClick={onClickSubmit}>GRAPHQL-API(동기) 요청하기</button>
        </>
    )
}