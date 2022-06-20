import { defineComponent } from 'vue';
import styles from "./HorizontalTree.module.scss"
export default defineComponent({
  name: 'HorizontalTree',
  props: {
    treeModel: { type: Object },
  },
  setup(props) {
    enum TYPES {
      "LABEL", "INPUT", "RADIO"
    }
    const treeModel: any = props.treeModel;
    const generateNode = (node: any) => {
      switch (node.type) {
        case TYPES.INPUT: return <input />;
        case TYPES.LABEL: return <span>{node.value}</span>;
        case TYPES.RADIO:
          return node.options.map(opt => {
            return <div>
              <input type="radio" name={opt.model} value={opt.value} /><span>{opt.label}</span>
            </div>
          })
      }
    }
    const outterNode = () => {
      let nodeList: any = [];
      treeModel.thatNode.forEach(node => {
        nodeList.push(generateNode(node));
      })
      return nodeList;
    }

    function childrenNode() {

    }
    return () => {
      return (
        <div class={styles['horizontal-tree']}>
          <ul>
            <li class={styles['horizontal-tree-root']}>
              {outterNode()}
              <ul>
                <li>c1
                  <ul>
                    <li>c11</li>
                    <li>c12</li>
                  </ul>
                </li>
                <li>c2</li>
              </ul>
            </li>
          </ul>
        </div>
      )
    }
  },
});