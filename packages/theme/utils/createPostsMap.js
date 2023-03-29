const matter = require('gray-matter')
const fs = require('fs')
const path = require('path')

fs.readdir('posts',(err,data)=>{
    if (err) return 0;
    const root = path.resolve('posts')
    let posts = [];
    for (const post of data){
        const postRaw = fs.readFileSync(path.join(root,post),{encoding:"utf-8"});
        let frontmatter = matter(postRaw);
        posts.push({
            url: `/posts/${post.replace('.md','')}.html`,
            data:frontmatter.data
        });
    }
    dividePostsByTime(posts)
    dividePostsByTags(posts)
})


function dividePostsByTime(posts) {
    const map = new Map();
    let key = new Set();
    posts.forEach(post => {
        let date = new Date(post.data.create);
        let year = date.getFullYear();
        let arr;
        key.add(year)
        arr = map.get(year);
        if (typeof arr === 'undefined') arr = [];
        arr.push(post);
        map.set(year, arr);
    })
    key = Array.from(key);
    key.sort((a,b)=>b-a)
    let postMap = {
        key,
        keyMap:{}
    }
    for (const i of key){
        postMap.keyMap[i] = map.get(i);
    }
    fs.writeFileSync('public/archive.json',JSON.stringify(postMap),{encoding:"utf-8"})
}


function dividePostsByTags(posts) {
    const map = new Map();
    const key = new Set();
    posts.forEach(post => {
        let arr;
        let labels = post.data.labels;
        if (typeof labels === 'undefined') {
            labels = ['未分类'];
        }
        for (const tag of labels) {
            key.add(tag);
            arr = map.get(tag)
            if (typeof arr === 'undefined') arr = [];
            arr.push(post);
            map.set(tag, arr);
        }
    });
    let postMap = {}
    for (const i of key){
        postMap[i] = map.get(i);
    }
    fs.writeFileSync('public/labels.json',JSON.stringify(postMap),{encoding:"utf-8"})

}