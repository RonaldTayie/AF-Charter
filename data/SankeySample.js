
const SankeySample = {
    type:"sankey",
    data: [
        {
            name:"Current",
            items:[
                {
                    name:"ABC retirement fund",
                    value: 80000,
                    to: ["2-1","2-0"]
                },
                {
                    name:"Sanlam retirement annuity",
                    value: 340000,
                    to: ["1-0"]
                },
                {
                    name:"Old mutual retirement annuity",
                    value: 80000,
                    to: ["1-0"]
                },
                {
                    name:"Unity trust",
                    value: 410000,
                    to: ["1-0"]
                }
            ]
        },
        {
            name:"Joins",
            items:[
                {
                    name:"#",
                    value: 900000,
                    to: ["2-1"]
                }
            ]
        },
        {
            name:"Recommended",
            items: [
                {
                    name: "AF investments",
                    value: 800000,
                    to: ["3-0"]
                },
                {
                    name:"First National Bank",
                    value: 1670000,
                    to: ["3-1","3-2","3-3","3-4","3-5"]
                }
            ]
        },
        {
            name:"Goals",
            items: [
                {
                    name: "Future Goals",
                    value: 100000
                },
                {
                    name:"Clear home loan",
                    value: 1100000
                },
                {
                    name:"Pay off student loan",
                    value: 100000
                },
                {
                    name:"Emergency fund setup",
                    value: 300000
                },
                {
                    name:"Linda's car",
                    value: 120000
                },
                {
                    name:"Linda's university ba...",
                    value: 50000
                }
            ]
        }
    ]
}

// levels.forEach((l)=>{
//     l.items.forEach((i)=>{
//         if('to' in i){
//             i.to.forEach((t)=>{
//                 let items = t.split("-");
//                 let to = levels[parseInt(items[0])].items[parseInt(items[1])]
//                 let r = [i.name,to.name,levels.length===parseInt(items[0])+1? to.value: i.value]
//                 rows.push(r)
//             })
//         }
//     })
// })

module.exports = {SankeySample}