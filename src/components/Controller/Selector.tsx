import { Cascader } from "@douyinfe/semi-ui";
import modelCascaderJson from '@consts/model_cascader.json';
import { AppContext } from "Provider";
import { useContext } from "react";


// type ModelJson = {
//     name: string;
//     path: string;
//     preview: string;
//     uuid: string;
// }

// const tmp: CascaderData[] = [];
// const pushNode = (levels: string[], node: CascaderData) => {
//     let root = data.filter((item) => item.label === levels[0]);
//     let p: CascaderData = { label: levels[0], value: levels[0], children: [] };
//     if (root.length > 0) {
//         p = root[0];
//     } else {
//         data.push(p);
//     }
//     for (let i = 1; i < levels.length; i++) {
//         let r: CascaderData = { label: levels[i], value: levels[i], children: [] };
//         let q = p.children?.filter((item) => item.label === levels[i]);
//         if (q && q?.length > 0) {
//             p = q[0];
//         } else {
//             p?.children?.push(r);
//             p = r;
//         }
//     }
//     if (p.children && p.children?.filter((item) => item.value === node.value).length < 1) {
//         p.children?.push(node);
//         tmp.push(node);
//     }
// };

// const data: CascaderData[] = [];
// (modelJson as ModelJson[]).forEach((model) => {
//     const { name, path } = model;
//     const levels = name.split('/');
//     const node = { label: levels[levels.length - 1], value: `/assets/models${path}` };
//     pushNode(levels.slice(1, levels.length - 1), node);
// });



export const Selector = () => {
    const context = useContext(AppContext);

    const onClear = () => {
        context?.resetModel();
        context?.setDebug([]);
    };

    const onSelect = (value: string | number | (string | number)[]) => {
        if (typeof value !== 'string') {
            return;
        }
        context?.loadModel(value);
    };

    return (
        <Cascader
            treeData={modelCascaderJson}
            placeholder="输入以搜索"
            filterTreeNode
            filterLeafOnly={false}
            style={{ width: '100%' }}
            showClear
            onClear={onClear}
            onSelect={onSelect}
            value={context?.modelPath}
        />
    );
};

export default Selector;
