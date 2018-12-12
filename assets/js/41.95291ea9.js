(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{253:function(t,s,n){"use strict";n.r(s);var a=n(1),e=Object(a.a)({},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[n("p",[t._v("지난 포스팅에선 호환되지 않는 인터페이스를 변환하여 클라이언트에게 제공하는 어댑터 패턴에 대해 알아보았다. 이번엔 서브시스템의 일련의 인터페이스에 대한 통합된 인터페이스를 제공하는 퍼사드 패턴에 대해 복습한다.")]),t._v(" "),t._m(0),t._v(" "),n("p",[t._v("어떤 서브시스템의 일련의 인터페이스에 대한 통합된 인터페이스를 제공한다. 퍼사드에서 고수준 인터페이스를 정의하기 때문에 서브시스템을 더 쉽게 사용할 수 있다.")]),t._v(" "),n("lazy-load",{attrs:{tag:"img",data:{src:"/images/posts/2018/3/퍼사드1.png",alt:"Piece of a Google search page result with the link and a highlight with red borders indicating the URL"}}}),t._v(" "),n("p",[t._v("퍼사드 패턴은 단순화된 인터페이스를 통해서 서브시스템을 더 쉽게 사용할수 있도록 하기 위한 용도로 사용한다. 어떤 서브시스템에 속한 일련의 복잡한 클래스들을 단순화시키고 통합시킨 클래스를 만들어서 제공한다. 퍼사드 패턴은 상당히 단순하며 복잡한 추상화와같은 개념이 필요 없다. 퍼사드 패턴을 이용하면 클라이언트와 서브시스템이 서로 긴밀하게 연결되지 않아도 된다.")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),n("lazy-load",{attrs:{tag:"img",data:{src:"/images/posts/2018/3/퍼사드2.png",alt:"Piece of a Google search page result with the link and a highlight with red borders indicating the URL"}}}),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),n("p",[t._v("영화를 보기 위해서는 팝콘 기계, 전등, 스크린, 프로젝터, 앰프와 DVD 총 6개의 클래스에 대해 13번의 메소드 호출이 필요하다. 영화를 다 시청하고 나면 다시 위의 순서를 역으로 반복해야 한다. 영화가 아닌 CD나 라디오를 들을 때는 순서나 작동 방법이 다르므로 시스템을 업그레이드하려면 또 다른 작동 방법이 추가되고, 사용자는 작동 방법을 다시 배워야한다. 이럴 때 퍼사드 패턴을 이용하면 복잡한 일을 간단하게 처리하고 영화를 즐길 수 있게 된다! 복잡한 시스템을 직접 건드리고 싶다면 위의 시스템을 그대로 쓰면 된다. 하지만 간단하고 편리한 것을 원한다면 퍼사드 패턴이 우리에게 도움을 줄 수 있다.")]),t._v(" "),n("lazy-load",{attrs:{tag:"img",data:{src:"/images/posts/2018/3/퍼사드3.png",alt:"Piece of a Google search page result with the link and a highlight with red borders indicating the URL"}}}),t._v(" "),t._m(5),t._v(" "),n("p",[t._v("홈씨어터 퍼사드 클래스의 코드 예시를 보면 좀 더 이해가 쉽다.")]),t._v(" "),t._m(6),t._m(7),t._v(" "),t._m(8),t._v(" "),n("p",[n("router-link",{attrs:{to:"/posts/java/design-principles-3.html"}},[t._v("최소 지식 원칙")])],1),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),n("p",[t._v("퍼사드에 서브시스템을 단순하게 활용하는 것 외에 자유롭게 기능을 추가할 수 있다.")]),t._v(" "),t._m(12),t._v(" "),n("p",[t._v("퍼사드 패턴에서 특정 서브시스템에 대해 만들 수 있는 퍼사드의 개수에는 제한이 없다.")]),t._v(" "),t._m(13),t._v(" "),n("p",[t._v("퍼사드는 클라이언트의 구현과 서브시스템을 분리시킬 수 있다. 홈 씨어터 시스템을 업그레이드 한다고 생각해보자. 클라이언트의 코드를 고치지 않고 퍼사드만 바꾸면 될 것이다.")]),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),n("p",[n("a",{attrs:{href:"https://github.com/iluwatar/java-design-patterns/tree/master/facade",target:"_blank",rel:"noopener noreferrer"}},[t._v("퍼사드 패턴 예제"),n("OutboundLink")],1)])],1)},[function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"정의"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#정의","aria-hidden":"true"}},[this._v("#")]),this._v(" 정의")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"예시"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#예시","aria-hidden":"true"}},[this._v("#")]),this._v(" 예시")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("집에서 영화를 보기위한 "),s("strong",[this._v("홈 씨어터 시스템")]),this._v(" 예시를 살펴보자. DVD 플레이어, 프로젝터, 자동 스크린, 서라운드 음향 및 팝콘 기계를 갖춘 시스템이다.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("전선과 프로젝터를 설치하고 각 장치들을 케이블로 연결하고 자잘한 부분을 조절하고 나면 영화를 보기 위한 준비가 끝난다. 이제 "),s("strong",[this._v("영화를 보기 위한 일련의 행동")]),this._v("을 살펴보자.")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ol",[n("li",[t._v("팝콘 기계를 켠다: PopcornPopper.on()")]),t._v(" "),n("li",[t._v("팝콘 튀기기 시작: PopcornPopper.pop()")]),t._v(" "),n("li",[t._v("전등을 어둡게 조절: TheaterLights.dim()")]),t._v(" "),n("li",[t._v("스크린을 내린다: Screen.down()")]),t._v(" "),n("li",[t._v("프로젝터를 켠다: Projector.on()")]),t._v(" "),n("li",[t._v("프로젝터로 DVD신호가 입력되도록 한다: Projector.setInput()")]),t._v(" "),n("li",[t._v("프로젝터를 와이드 스크린 모드로 전환한다: Projector.wideScreenMode()")]),t._v(" "),n("li",[t._v("앰프를 켠다: Amplifier.on()")]),t._v(" "),n("li",[t._v("앰프 입력을 DVD로 전환한다: Amplifier.setDvd()")]),t._v(" "),n("li",[t._v("앰프를 서라운드 음향 모드로 전환한다: Amplifier.setSurroundSound()")]),t._v(" "),n("li",[t._v("앰프 볼륨을 설정한다: Amplifier.setVolumn()")]),t._v(" "),n("li",[t._v("DVD 플레이어를 켠다: DvdPlayer.on()")]),t._v(" "),n("li",[t._v("DVD를 재생한다: DvdPlayer.play()")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("기존 홈 씨어터 시스템에서 "),s("strong",[this._v("새로운 클래스(HomeTheaterFacade)")]),this._v(" 를 추가한다. 이 홈 씨어터 시스템용 퍼사드 클래스는 watchMovie() 메소드 등 몇 가지 간단한 메소드가 들어있다. "),s("strong",[this._v("퍼사드 클래스에서는 홈 씨어터 구성요소들을 하나의 서브시스템으로 간주")]),this._v("하고, "),s("strong",[this._v("watchMovie() 메소드에서는 서브시스템의 메소드들을 호출하여 필요한 작업을 처리한다")]),this._v(". 이제 홈 씨어터 시스템을 사용하려는 클라이언트에서는 각각의 서브시스템들이 아닌 퍼사드 클래스의 메소드를 호출하게 된다. watchMovie() 메소드만 호출하면 알아서 앞의 6개의 서브시스템을 이용해서 13번의 메소드 호출을 처리해줄 것이다. 기존 서브시스템은 어느 부분도 바뀌지 않았으며 여전히 직접 접근 또한 가능하다. 서브시스템 클래스의 고급 기능이 필요하다면 언제든 마음대로 쓸 수 있다.")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HomeTheaterFacade")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 서브 시스템")]),t._v("\n    Amplifier amp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    Tuner tuner"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    DvdPlayer dvd"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    CdPlayer cd"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    Projector projector"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    TheaterLights lights"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    Screen screen"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    PopcornPopper popper"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("HomeTheaterFacade")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 인스턴스 변수 초기화 };")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("watchMovie")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("String movie"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        System"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Get ready to watch a movie..."')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        popper"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("on")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        popper"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("pop")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        lights"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("dim")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        screen"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("down")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        projector"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("on")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        projector"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("wideScreenMode")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        amp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("on")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        amp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setDvd")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dvd"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        amp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setSurroundSound")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        amp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setVolumn")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        dvd"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("on")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        dvd"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("play")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("movie"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("watchMovie() 메소드를 이용해 앞에서 일일이 순서대로 했던 13개의 작업을 처리한다. "),s("strong",[this._v("꽤 복잡한 모든 일들을 하나의 메소드로 간단하게 처리할 수 있는 기능을 제공하는 것이다")]),this._v(". 구현 방법이 복잡할 것도 없는 것이, 각 작업은 서브시스템에 들어있는 구성요소들에게 위임하기만 하면 된다.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"최소-지식-원칙"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#최소-지식-원칙","aria-hidden":"true"}},[this._v("#")]),this._v(" 최소 지식 원칙")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("퍼사드 패턴은 최소 지식 원칙(Principle of Least knowledge)이 적용된다")]),this._v(". 최소 지식 원칙은 "),s("strong",[this._v('객체 사이의 상호작용은 될 수 있으면 아주 가까운 "친구"사이에서만 허용하라는 원칙이다')]),this._v(". 시스템을 디자인할 때, 어떤 객체든 그 객체와 상호작용을 하는 클래스의 개수에 주의해야 하며 그런 객체들이 어떤 식으로 상호작용을 하는지에도 주의를 기울여야 한다. "),s("strong",[this._v("이 원칙을 준수하게 되면 여러 클래스들이 복잡하게 얽혀서 시스템의 한 부분을 변경했을 때, 다른 부분까지 줄줄이 고쳐야 하는 사황을 미치 방지할 수 있다")]),this._v(".")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"의문점"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#의문점","aria-hidden":"true"}},[this._v("#")]),this._v(" 의문점")])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("퍼사드에서 기능을 추가하거나 각각의 요청을 서브시스템에 그대로 전달하기도 하는가?")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("한 서브시스템에 퍼사드를 하나씩만 만들어야 하는가?")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("더 간단한 인터페이스를 제공하는것을 제외한 장점이 있는가?")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("어댑터 패턴과 퍼사드 패턴의 차이점은 무엇인가?")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("어댑터 패턴에서는 하나 이상의 클래스의 인터페이스를 클라이언트에서 필요로 하는 인터페이스로 변환한다")]),this._v(". 클라이언트에서 사용한 여러 인터페이스에 맞추기 위해 여러 클래스를 감싸야 할 수도 있다. "),s("strong",[this._v("퍼사드 패턴이 여러가지 클래스를 감싸야만 하는 것은 아니다. 아주 복잡한 인터페이스를 가지고 있는 단 한 개의 클래스에 대해서 퍼사드를 만들 수도 있다")]),this._v(".")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("이처럼 어댑터와 퍼사드의 차이점은 감싸는 클래수의 개수에 있는 것이 아니라 그 용도에 있다. "),s("strong",[this._v("어댑터 패턴은 인터페이스 호환성")]),this._v(", "),s("strong",[this._v("퍼사드 패턴은 서브시스템에 대한 간단한 인터페이스 제공")]),this._v("을 위한 용도로 사용된다.")])}],!1,null,null,null);e.options.__file="facade.md";s.default=e.exports}}]);