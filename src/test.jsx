// import "./test.css"

let people = {
    name:'梨花',
    id:11,
    cc:'heihei'
}

let list = ['哈哈','嘿嘿','吼吼'];


const Bb = ()=>{
    let handleClick=(name)=>{
        console.log(name,'name');
    }
    let handleH = (i,a,c)=>{
        console.log(i,'this指向');
        console.log(a,'item');
        console.log(c,'下标');
    }
    let change = ()=>{
        people.name = 'hello React';
        // this.setState({
        //     people:people.name = 'hello React'
        // })
        console.log(1);
    }
    
    return (
        <div className="container text-center py-4">
            <h1 {...people} onClick={handleClick.bind(this,people.name)}>{people.name}</h1>
            {
                list.map((item,index) => <h1 className="text-2xl" onClick={handleH.bind(this,item,index)} key={index}>{item}</h1>)
            }
            <button onClick={change}>点击</button>
        </div>
    )
}

export default Bb;