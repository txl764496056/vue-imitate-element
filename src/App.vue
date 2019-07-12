<template>
  <div id="app">
    <div id="nav">
      <h2>im components</h2>
        <router-link to="/">单选框</router-link> 
        <router-link to="/About">About</router-link>
    </div>
    <div class="content">
      <div class="compare-title">
        <p>element compoennets</p>
        <p>im components</p>
      </div>
      <router-view/>
    </div>
  </div>
</template>

<style lang="scss">

@import '@/scss/base.scss';

*{margin:0;padding:0;box-sizing:border-box;}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height:100vh;width:100vw;
  display:flex;
}

@mixin blue-gradient{
  background-color:rgba(64,158,255,0.2);
  background-image:linear-gradient(45deg,#fff 0,#fff 40%,transparent 40%,transparent 50%,#fff 50%,#fff 90%,transparent 90%,transparent 100%);
  background-size:5px 5px;
}
#nav {
  width:220px; overflow-y:auto;
  text-align:right;
  h2{text-align:center;padding:15px;font-size:22px;}
  a {
    font-weight: normal;display:block;padding:10px 15px;
    color: #2c3e50;text-decoration:none;border-top:1px solid #eee;
    &.router-link-exact-active {
      color: $theme-color;
      font-weight:bold;letter-spacing: 1px;
      box-shadow:0 0 6px rgba(64,158,255,0.3);
      @include blue-gradient;
    }
    &.router-link-exact-active ,&.router-link-exact-active+a{
      border:none;
    }
    &:first-of-type{border-top:none;}
  }
}
.content{
  border-left:10px solid #eee;flex:1;text-align:left;position:relative;padding-top:50px;
  @at-root .compare-title{
    display:flex;position:absolute;top:0;right:0;left:0;
    p{
      flex:1;text-align:center;font-size:22px;color:#3f8fe2;@include blue-gradient;padding:10px;
      border-bottom:2px solid #cee3f9;
      &:first-of-type{
        margin-right:3px;
      }
      &:not(:first-of-type){
        margin-left:3px;
      }
    }
  }
}

</style>
