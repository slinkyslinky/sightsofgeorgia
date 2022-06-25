import del from 'del' // Очистка dist
import { path } from '../gulpfile.js'


export default function clear() {
    return del(path.buildFolder)
}

