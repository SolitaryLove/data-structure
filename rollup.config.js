import resolve from "@rollup/plugin-node-resolve";
import babel from '@rollup/plugin-babel';

export default {
    input:'./src/main.js',
    output:{
        file:'./dist/data-structure.js',
        name:'dataStructure',
        format:'umd',
        sourcemap:true,
    },
    plugins:[
        babel({
            exclude:'node_modules/**'
        }),
        resolve(),
    ]
}