<template>
  <a-layout id="components-layout-demo-responsive">
    <a-layout-sider
      :trigger="null"
      breakpoint="lg"
      collapsed-width="0"
      v-model="collapsed"
      @collapse="onCollapse"
      @breakpoint="onBreakpoint"
      collapsible
      :style="{ height: '100vh' }"
    >
      <div class="logo">
        <h1>PETRUZ</h1>
      </div>
      <a-menu theme="dark" mode="inline" :default-selected-keys="['4']">
        <a-menu-item key="1">
          <a-icon type="user" />
          <span class="nav-text">nav 1</span>
        </a-menu-item>
        <a-menu-item key="2">
          <a-icon type="video-camera" />
          <span class="nav-text">nav 2</span>
        </a-menu-item>
        <a-menu-item key="3">
          <a-icon type="upload" />
          <span class="nav-text">nav 3</span>
        </a-menu-item>
        <a-menu-item key="4">
          <a-icon type="user" />
          <span class="nav-text">nav 4</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header :style="{ background: '#fff', padding: 0 }">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="() => (collapsed = !collapsed)"
        />
      </a-layout-header>
      <a-layout-content :style="{ margin: '24px 16px 0' }">
        <slot></slot>
      </a-layout-content>
      <a-layout-footer style="text-align: -webkit-right">
        Petruz Web ©2021 Created by @grupoPetruz
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script>
export default {
  data() {
    return {
      collapsed: false,
    };
  },
  methods: {
    onCollapse(collapsed, type) {
      console.log(collapsed, type);
    },
    onBreakpoint(broken) {
      console.log(broken);
    },
  },
};
</script>

<style>
#components-layout-demo-responsive .logo {
  height: 32px;
  background: #ffffff33;
  margin: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
}
#components-layout-demo-responsive .logo h1 {
  display: block;
  color: #fff;
  margin: 0;
}
#components-layout-demo-responsive .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-responsive .trigger:hover {
  color: #1890ff;
}
</style>
