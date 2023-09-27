// DONE
'use strict';
const tree = {
    node: 1,
    children: [
        {
            node: 2,
            children: [
                {
                    node: 3,
                    children: [
                        {
                            node: 4,
                            children: [
                                {
                                    node: 5,
                                    children: [],
                                },
                                {
                                    node: 6,
                                    children: [],
                                },
                                {
                                    node: 7,
                                    children: [],
                                },
                                {
                                    node: 8,
                                    children: [],
                                },
                            ],
                        },
                        {
                            node: 9,
                            children: [],
                        },
                    ],
                },
            ],
        },
        {
            node: 10,
            children: [
                {
                    node: 11,
                    children: [
                        {
                            node: 12,
                            children: [],
                        },
                    ],
                },
                {
                    node: 13,
                    children: [],
                },
                {
                    node: 14,
                    children: [],
                },
            ],
        },
    ],
};

function nodeFind(tree, node) {
    let foundNode;

    // FIXME функция будет проходится по всему дереву, даже если искомый узел будет первым. (DONE)
    //  Подумай, как оптимизировать поиск узла(DONE)
    if (tree.node === node) {
        return tree;
    }

    (function addNode(tree) {
        if (foundNode) return;

        for (let child of tree.children) {
            tree = child;

            if (tree.node === node) {
                foundNode = tree;
                return;
            }

            addNode(tree);
        }
    })(tree)

    // FIXME функция должна возвращать ссылку на искомый узел (DONE)
    return foundNode ? foundNode : -1;
}