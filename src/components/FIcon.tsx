import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FIcon',
  props: {
    icon: { type: String, required: true },
    size: { type: [String, Number], default: '18' },
  },
  setup(props) {
    return () => {
      return (
        <span style={{ fontSize: props.size + 'px' }}>
          <span class="iconify" style="vertical-align: middle;" data-icon={props.icon}></span>
        </span>
      )
    }
  },
});