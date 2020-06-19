var app=new Vue({
    el:"#app",
    data() {
        return {
            loading:true,
            box:false
          
        }
    },
    mounted() {  
        this.load()     
        this.baidu()   
    },
    methods: {
        load(){
            var _this=this
            var myimg = new Image();
            myimg.src = "./images/banner.png"
            myimg.onload = function(){                
                _this.loading=false 
            }
        },
        boxopen(){
            this.box=true
        },
        closebox(){
            this.box=false
        },
        linkback(){
            _hmt.push(['_trackEvent', 'intro2', 'click', "goToLogin"])
            window.location.href = "https://yyxx.10086.cn/z/ai/index.html#/"
        },
        baidu() {
            this._hmt = this._hmt || []
            var url = window.location.href
            if (url.indexOf("yyxx.10086.cn") > 0) {
                (function() {
                  var hm = document.createElement("script");
                  hm.src = "//hm.baidu.com/hm.js?d3bccd64e8d80ab8ac93cf79c266c9f6";
                  var s = document.getElementsByTagName("script")[0];
                  s.parentNode.insertBefore(hm, s);
                })();
              }
            else if (url.indexOf("fx.hekouxin.com") > 0) {
                (function() {
                  var hm = document.createElement("script");
                  hm.src = "//hm.baidu.com/hm.js?ccf9ed592533fa5d92d95379cfc559fb";
                  var s = document.getElementsByTagName("script")[0];
                  s.parentNode.insertBefore(hm, s);
                })();
              }
        }
        
    }
    
})