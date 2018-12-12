(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{254:function(t,s,a){"use strict";a.r(s);var n=a(1),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("p",[t._v("지난 포스팅에선 객체를 감싸서 새로운 임무를 부여하는 데코레이터 패턴에 대해 알아보았다. 이번에는 객체를 생성하는 과정을 분리하여 불필요한 의존성을 없애는 팩토리 패턴에 대해 복습한다.")]),t._v(" "),t._m(0),t._v(" "),t._m(1),a("p",[t._v("인터페이스를 이용하여 유연한 코드를 작성하려고 한다. Duck 자료형의 변수에 MallardDuck 구상 클래스의 인스턴스를 생성해서 대입했다.")]),t._v(" "),t._m(2),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),a("p",[t._v("반면 인터페이스가 아닌 구상 클래스의 타입을 사용하면 새로운 구상 클래스가 추가될 때마다 코드를 고쳐야한다. 결국 해당 클래스는 변화와 확장에 대해 닫혀있는 코드가 된다. 이는 첫번째 원칙, OCP 원칙과 연관된다.")]),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),a("p",[t._v("위와 같이 객체 생성을 팩토리가 담당하게 하면 아래와 같은 특징이 생긴다.")]),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),a("lazy-load",{attrs:{tag:"img",data:{src:"/images/posts/2018/3/팩토리메소드1.png",alt:"Piece of a Google search page result with the link and a highlight with red borders indicating the URL"}}}),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),a("lazy-load",{attrs:{tag:"img",data:{src:"/images/posts/2018/3/팩토리메소드2.png",alt:"Piece of a Google search page result with the link and a highlight with red borders indicating the URL"}}}),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),t._m(20),t._v(" "),t._m(21),t._v(" "),t._m(22),t._v(" "),t._m(23),t._v(" "),t._m(24),t._v(" "),t._m(25),t._v(" "),t._m(26),t._v(" "),a("p",[t._v("이전의 예시처럼 매개변수를 이용한 팩토리 메소드를 매개변수 팩토리 메소드라고하는데, 이는 매개변수를 이용하여 한 가지 이상의 객체를 만들 수 있다. 하지만 매개변수를 사용하지 않고 그냥 한 가지의 객체만 생성할 수도 있다.")]),t._v(" "),t._m(27),t._v(" "),a("p",[t._v("배럭에 매개변수로 marine을 넘겨야하는데 실수로 mairne을 넘기면 런타임 오류가 발생한다. 이런 런타임 오류를 방지하여 형식 안정성을 조금 더 잘 보장해줄 수 있는 기법들이 존재한다. 예를 들어 매개변수 형식을 나타내기 위한 타입을 만들 수 있고, 정적 상수를 사용해서 컴파일 단계에서 오류를 잡아낼 수도 있다.")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/iluwatar/java-design-patterns/tree/master/factory-method",target:"_blank",rel:"noopener noreferrer"}},[t._v("팩토리 메소드 패턴 예제"),a("OutboundLink")],1)])],1)},[function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"구상-객체와-new-키워드"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#구상-객체와-new-키워드","aria-hidden":"true"}},[this._v("#")]),this._v(" 구상 객체와 new 키워드")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v("Duck duck "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MallardDuck")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v("Duck duck"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("picnic"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tduck "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MallardDuck")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("hunting"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tduck "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DecoyDuck")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("inBathTub"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tduck "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RubberDuck")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("오리를 나타내는 일련의 구상 클래스들이 있을 경우, 컴파일시에는 어떤 것의 인스턴스를 만들어야 하는지 알 수 없다")]),this._v(". 생성해야 하는 구체적인 인스턴스는 실행시에 주어진 조건에 따라 결정된다. 따라서 위처럼 작성한다. 이러한 코드는 변경하거나 확장할 때 "),s("strong",[this._v("코드를 다시 확인해야하기 때문에 관리가 어려워지고 오류의 가능성도 높아진다")]),this._v(".")])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("애플리케이션에서 달라지는 부분을 찾아 내고, 달라지지 않는 부분으로부터 분리시킨다.(원칙 1)")]),this._v(" "),s("p",[this._v("인터페이스에 맞춰 프로그래밍한다.(원칙 3)")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("new 키워드 자체에 문제가 있는 것은 아니다. 문제는 "),s("strong",[this._v("변화가 불러오는 상황")]),this._v("에 있다. 어떻게 변화에 대비해야할까? 헤드퍼스트 디자인패턴 책에 등장하는 디자인 원칙 두가지를 살펴보자. 세번째 원칙에 따라 인퍼테이스에 맞춰서 코딩을 하면 시스템에서 일어날 수 있는 여러 변화를 이겨낼 수 있다. 다형성 덕분에 어떤 클래스든 특정 인터페이스만 구현하면 해당 인스턴스의 타입으로 사용할 수 있다.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"간단한-팩토리"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#간단한-팩토리","aria-hidden":"true"}},[this._v("#")]),this._v(" 간단한 팩토리")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("자바에서 new는 구상 클래스의 인스턴스를 생성한다. 이처럼 "),s("strong",[this._v("특정 객체 생성을 처리하는 클래스")]),this._v("를 팩토리라고 부른다.")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SimpleUnitFactory")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" Unit "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createUnit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("String unitNm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        Unit unit "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" null"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("unitNm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("equals")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("unit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Marine"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            unit "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Marine")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("unitNm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("equals")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("unit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Firebat"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            unit "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Firebat")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("unitNm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("equals")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("unit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Vessel"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            unit "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("vessel")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("SimpleUnitFactory를 많은 클라이언트가 사용하는 경우.")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("팩토리 클래스를 이용해 유닛 객체를 받아서 유닛의 요구 미네랄양이라던가 유닛에 대한 정보 등을 찾아서 활용하는 Barracks와 같은 클래스와 같은곳에서 활용한다. 이처럼 유닛을 생산하는 작업을 한 클래스에 캡슐화시켜 놓으면 "),s("strong",[this._v("구현을 변경해야 하는 경우에 대비할 수 있다. 팩토리 클래스 하나만 고치면 된다")]),this._v(".")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"팩토리-메소드-패턴의-정의"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#팩토리-메소드-패턴의-정의","aria-hidden":"true"}},[this._v("#")]),this._v(" 팩토리 메소드 패턴의 정의")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("객체를 생성하기 위한 인터페이스를 정의한다. 어느 구상 클래스의 인스턴스를 만들지는 서브클래스에 의해 결정")]),this._v("된다.  구상 클래스의 인스턴스를 만드는 작업을 캡슐화하는 팩토리 패턴의 종류는 여러가지가 있는데 그중 팩토리 메소드 패턴의 가장 큰 특징은 다음과 같다.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("팩토리 메소드 패턴에서는 어떤 클래스의 인스턴스를 만들지는 서브클래스에 의해 결정된다.")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("'결정한다'")]),this._v(" 라는 표현은 실제로 서브클래스가 어떤 인스턴스를 만드는지에 대한 의사판단을 하는게 아니라 어떤 서브클래스를 사용하느냐에 따라 생성되는 객체 인스턴스가 결정된다는 의미이다. 서브클래스가 실행중에 어떤 클래스의 인스턴스를 만들지 결정하는 것이 아니라, 생산자 클래스 자체가 사전 지식이 전혀 없는 상태에서 만들어진다.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"다이어그램"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#다이어그램","aria-hidden":"true"}},[this._v("#")]),this._v(" 다이어그램")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[a("strong",[t._v("Product")]),t._v("는 "),a("strong",[t._v("생성할 대상의 클래스를 추상화시킨 인터페이스")]),t._v("이다. 생산 대상이되는 구상 클래스는 Product 인터페이스를 구현해야 한다.  "),a("strong",[t._v("Creator")]),t._v("는 "),a("strong",[t._v("Product를 생성하기 위한 모든 기능이 정의되어 있는 추상 클래스")]),t._v("이다. Product을 만드는 메소드는 구현이 없는 추상 메소드로 정의한다. 팩토리의 역할을 가진 모든 클래스는 Creator 인터페이스를 구현해야한다. 이러한 구조를 갖기 때문에 Product를 생성하는 factoryMethod()는 Creator의 구상클래스에서 구현한다. Product를 만드는 방법은 Creator의 구상클래스가 구현하므로 생성 대상의 구상 클래스를 만들어내는 작업은 해당 클래스에서 책임진다.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"예시"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#예시","aria-hidden":"true"}},[this._v("#")]),this._v(" 예시")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("스타크래프트 테란 종족의 유닛과 건물의 일부를 다이어그램으로 살펴보자. Barracks는 지상 인간형 유닛인 Marine, Firebat을 생산하고 Startport는 공중유닛인 Vessel, Battlecruiser, Dropship을 생산한다. 사용자가 배럭이나 스타포트에서 표시된 "),s("strong",[this._v("유닛을 클릭한다면")]),this._v(", 해당 유닛의 이름을 인자로 전달하여 "),s("strong",[this._v("requestCreateUnit(String unitNm) 메소드를 호출")]),this._v("한다. requestCreateUnit 메소드에는 클라이언트가 소유중인 미네랄과 해당 유닛의 미네랄을 비교하거나 하는 로직이 담겨있다. 이러한 로직을 통과하면 "),s("strong",[this._v("마지막으로 추상메소드인 createUnit() 가 호출")]),this._v("된다. 서브클래스가 배럭인 경우 배럭의 createUnit()을, 스타포트인 경우 스타포트의 createUnit()을 호출하게 된다.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("이처럼 어떤 클래스를 만들지를 결정하는 것은 서브클래스(배럭, 스타포트)이다")]),this._v(". 다른 예로 피자가게를 들자면 배럭과 스타포트는 각 분점으로 표현할 수 있다. 본점인 PizzaCreator가 있고, 분점에서 각각 고유의 피자를 생산하고 판매한다. "),s("strong",[this._v("이러한 서브클래스를 구상 생산자라고 한다")]),this._v(".")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("팩토리 메소드 패턴은 팩토리 메소드와 결환된 requestCreateUnit() 메소드를 제공하는 형태의 프레임워크이다. Unit을 생산하고 싶은 클라이언트나 이를 사용하는 클래스에서는 requestCreateUnit()만 호출하면된다. 이를 "),s("strong",[this._v("Unit에 관한 지식을 각 생산자에 캡슐화하는 방법에 초점을 맞추어보자")]),this._v(". 그러면 다른 형태의 프레임워크로 표현할 수 있다. Barracks에서는 지상 인간형 유닛을 만드는 것에 대한 모든 지식이 캡슐화 되어있다. Starport는 공중 유닛을 만드는 것에 대한 모든 지식이 캡슐화 되어있다. 이처럼 지식을 캡슐화해서 클라이언트로부터 분리하여 제공하는 프레임워크로 바라볼 수 있다. 새로운 형태의 팩토리가 추가되면 (커맨드 센터, 팩토리 등) UnitCreator을 상속받은 구상 생산자를 정의하고 알맞은 지식을 캡슐화하여 createUnit() 추상 메소드를 구현하면 된다.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"의문점"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#의문점","aria-hidden":"true"}},[this._v("#")]),this._v(" 의문점")])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("구상 생산자가 하나만 있다면 팩토리 메소드 패턴의 장점이 있을까?")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("제품을 생산하는 역할을 분리시켜주면 결합이 느슨해진다. 구상 생산자가 하나만 있다는 이유로 팩토리 패턴을 제거한다면 제품을 생산하는 부분과 사용하는 부분이 같은 몸체에 있게된다. "),s("strong",[this._v("결합이 느슨해지면 제품의 구성을 변경한다해도 생산자는 변경하지 않아도 된다는 장점을 잃게된다")]),this._v(".")])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("간단한 팩토리와 팩토리 메소드 패턴의 차이는?")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("간단한 팩토리는 서브클래스와 같은 방법을 이용하지 않고 하나의 팩토리가 직접 구상 제품에 의존하는 형태이다. 팩토리 메소드 패턴에서는 구상 클래스를 만들 때, 추상 클래스를 확장해서 서브클래스를 이용한다. "),s("strong",[this._v("간단한 팩토리는 일회용 처방에 불과한 반면 팩토리 메소드 패턴은 어떤 구현을 사용할지를 서브클래스에서 결정하는 프레임워크를 만들 수 있다")]),this._v("는 결정적인 차이가 있다. 간단한 팩토리에서는 객체 생성을 캡슐화하는 방법을 사용하긴 하지만, 생성하는 제품을 마음대로 변경할 수 없기 때문에 팩토리 메소드 패턴처럼 "),s("strong",[this._v("강력한 유연성을 제공하진 못한다")]),this._v(".")])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("팩토리 패턴은 반드시 여러 개의 제품을 만들어야 하는가?")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("매개변수 팩토리 메소드는 형안정성(type-safety)에 지장이 있지 않은가?")])])}],!1,null,null,null);e.options.__file="factory-method.md";s.default=e.exports}}]);