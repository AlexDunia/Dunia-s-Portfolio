<script>
</script>
<template>
 <div className="techbg">

<div className="techspace">

<div className="tech">
  <h1> Technologies </h1>
  <p> I sketch and wireframe user interfaces with adobe xd and figma; I then build for the browser with React Js, Html, Css, Vanilla js but i am more
    Vue js oriented now. On the backend, I work with Php and laravel. For my databases, I work with my sql and xammp. I write linux
    commands occasionally and use it to interact with my desktop, I also do database seeding
    and migrations directly on my command line. I have three years of graphic design experience with Adobe Photoshop.
  </p>
</div>

<div className="stackflex">

<div className="stackimg">
  <img src="@/assets/images/figmaa.png"/>
</div>

<div className="stackimg" >
 <img src="@/assets/images/react.png"/>
</div>

<div className="stackimg" >
 <img src="@/assets/images/php.png"/>
</div>

<div className="stackimg" >
 <img src="@/assets/images/xd.png"/>
</div>

<div className="stackimg" >
 <img src="@/assets/images/laravel.png"/>
</div>

<div className="stackimg" >
<img src="@/assets/images/github.png"/>
</div>

<div className="stackimg" >
<img src="@/assets/images/photoshop.png"/>
</div>

</div>

</div>

</div>

<div id="section4">
</div>

</template>

<style>

.techbg{
  background:#E1C73F;
  padding-top:50px;
  padding-bottom:50px;
  margin-top:120px;
  margin-bottom:70px;
}

.techspace{
  width:82%;
  margin:auto;
  margin-top:20px;
}

.tech p{
  font-size:16px;
  padding-top:30px;
  line-height:2em;
  font-family:'poppins';
  font-weight:200;
}

.tech h1{
  font-size:30px;
  color:#450C2F;
  font-weight:100;
}

.stackimg img{
  width:50px;
}

.stackimg{
  margin-top:50px;
}

.stackflex{
  display:flex;
  justify-content:space-around;
}


@media (max-width: 900px) {

/* Nav for Responsive screen */
.stackimg img{
  width: 30px;
}

}
</style>