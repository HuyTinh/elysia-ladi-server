import * as elements from 'typed-html'
import { SideBar } from './components/sidebar'

export const App = ({ content }: { content?: any }) => {
    return (
        <div>
            <SideBar content={content} />
        </div>
    )
}
