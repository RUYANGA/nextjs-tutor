export default async function Docs({params}:{params:Promise<{slug:string[]}>}){

    const {slug} =await params
    if(slug.length===2){
        return(
            <h1>
                the view is {slug[0]} feature {slug[1]}
            </h1>
        )
    }else if(slug.length===1){
        return<h1>hello {slug[0]}</h1>
        
    }

    return<h1>Doc Home page</h1>
}