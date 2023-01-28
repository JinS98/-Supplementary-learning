import { useRouter } from "next/router"
import { useRecoilState } from "recoil"
import { visitedPageState } from "../../../commons/stores"

export const  useMoveToPage= () => {
const router = useRouter()
const [visitedPage, setVisitedPage] = useRecoilState(visitedPageState)

    const onclickMoveToPage = (path: string) => () => {
        setVisitedPage(path)
        void router.push(path)
    } 

    return {
        visitedPage,
        onclickMoveToPage
    }
}