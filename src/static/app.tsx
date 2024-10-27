import * as elements from 'typed-html'
import { SideBar } from './components/sidebar'

/**
 * 
 * @param param0 
 * @returns 
 */

export const App = ({ content }: { content?: any }) => {
    return (
        <div>
            <SideBar content={content} />
        </div>
    )
}
