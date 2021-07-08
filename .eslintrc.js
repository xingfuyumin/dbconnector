module.exports = {
    "extends": ["airbnb"],
    "env":{
        "browser": true,
    },
    "parser":"babel-eslint",// 语法识别能力较强，比如class方法用箭头函数方式声明
    "rules":{
        "linebreak-style":0,
        "prefer-destructuring":0,
        "prefer-const":0,// const 不应根据上下文是否修改来判断
        "one-var":0,// 单变量模式是一种经典，至少不用排斥它
        "no-underscore-dangle":0,//下划线开头在有的模式下表示私有变量
        "comma-dangle":['error', {
            arrays: 'only-multiline',
            objects: 'always-multiline',
            imports: 'only-multiline',
            exports: 'only-multiline',
            functions: 'ignore',
        }],
        "no-console":1, //禁止console没有必要
        "no-param-reassign":0,// 加一个赋值也不能改变参数的引用传值，说到底还是需要开发者去注意
        
        "import/prefer-default-export":0,
        "import/no-extraneous-dependencies":[2,{'devDependencies':true}],
        "max-len":0,// 有的时候真的挺长而且不适合换行

        "react/prop-types":0,
        "react/forbid-prop-types":0,
        "react/jsx-filename-extension":[2,{ extensions: ['.js','.jsx','.tsx'] }],// 因为index.js,其他尽可能遵守
        "react/sort-comp":0, 

        "jsx-a11y/anchor-is-valid":0,//React-Router Link 用to代替href
    }
};