import {useEffect,useState} from 'react';
import PieChart from './PieChart';
 
 
 
const Dashboard = () => {
   
   const[record,setRecord] = useState([])
 
   const getData = () =>
   {
       fetch('https://jsonplaceholder.typicode.com/users')
       .then(resposne=> resposne.json())
       .then(res=>setRecord(res))
   }
 
   useEffect(() => {
      getData();
   },)
    
 
    return (
    <div class="col main pt-5 mt-3">
         
        <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="#">Home</a></li>
            <li class="breadcrumb-item"><a href="#">Library</a></li>
            <li class="breadcrumb-item active" aria-current="page">Data</li>
        </ol>
        </nav>
        <p class="lead d-none d-sm-block">Add Employee Details and Records</p>
 
        <div class="alert alert-warning fade collapse" role="alert" id="myAlert">
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">×</span>
                <span class="sr-only">Close</span>
            </button>
            <strong>Data and Records</strong> Learn more about employee
        </div>
        <div class="row mb-3">
            <div class="col-xl-3 col-sm-6 py-2">
                <div class="card bg-success text-white h-100">
                    <div class="card-body bg-success" style={{backgroundColor:"#57b960"}}>
                        <div class="rotate">
                            <i class="fa fa-user fa-4x"></i>
                        </div>
                        <h6 class="text-uppercase">Users</h6>
                        <h1 class="display-4">134</h1>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-sm-6 py-2">
                <div class="card text-white bg-danger h-100">
                    <div class="card-body bg-danger">
                        <div class="rotate">
                            <i class="fa fa-list fa-4x"></i>
                        </div>
                        <h6 class="text-uppercase">Posts</h6>
                        <h1 class="display-4">87</h1>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-sm-6 py-2">
                <div class="card text-white bg-info h-100">
                    <div class="card-body bg-info">
                        <div class="rotate">
                          <i class="fab fa-twitter fa-4x"></i>
                        </div>
                        <h6 class="text-uppercase">Tweets</h6>
                        <h1 class="display-4">125</h1>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-sm-6 py-2">
                <div class="card text-white bg-warning h-100">
                    <div class="card-body">
                        <div class="rotate">
                            <i class="fa fa-share fa-4x"></i>
                        </div>
                        <h6 class="text-uppercase">Shares</h6>
                        <h1 class="display-4">36</h1>
                    </div>
                </div>
            </div>
        </div>
 
        <hr/>
        {/* <div class="row placeholders mb-3">
            <div class="col-6 col-sm-3 placeholder text-center">
                <img src="//placehold.it/200/dddddd/fff?text=1" class="mx-auto img-fluid rounded-circle" alt="Generic placeholder thumbnail"/>
                <h4>Responsive</h4>
                <span class="text-muted">Device agnostic</span>
            </div>
            <div class="col-6 col-sm-3 placeholder text-center">
                <img src="//placehold.it/200/e4e4e4/fff?text=2" class="mx-auto img-fluid rounded-circle" alt="Generic placeholder thumbnail"/>
                <h4>Frontend</h4>
                <span class="text-muted">UI / UX oriented</span>
            </div>
            <div class="col-6 col-sm-3 placeholder text-center">
                <img src="//placehold.it/200/d6d6d6/fff?text=3" class="mx-auto img-fluid rounded-circle" alt="Generic placeholder thumbnail"/>
                <h4>HTML5</h4>
                <span class="text-muted">Standards-based</span>
            </div>
            <div class="col-6 col-sm-3 placeholder text-center">
                <img src="//placehold.it/200/e0e0e0/fff?text=4" class="center-block img-fluid rounded-circle" alt="Generic placeholder thumbnail"/>
                <h4>Framework</h4>
                <span class="text-muted">CSS and JavaScript</span>
            </div>
        </div> */}
       
        <div class="row ">
            <div class="col-lg-7 col-md-6 col-sm-12">
              <h5 class="mt-3 mb-3 text-secondary">
               Check More Records of Employees
              </h5>
                <div class="table-responsive">
                    <table class="table table-striped">
                        <thead class="thead-light">
                            <tr>
                                <th>No</th>
                                <th>Label</th>
                                <th>Header</th>
                                <th>Column</th>
                                <th>Record Data</th>
                            </tr>
                        </thead>
                        <tbody>
                         {record.slice(0, 5).map((output)=>
                            <tr>
                                <td>{output.id}</td>
                                <td>{output.name}</td>
                                <td>{output.email}</td>
                                <td>{output.username}</td>
                                <td>{output.website}</td>
                                <td></td>
                            </tr>
                           )}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="col-lg-5 col-md-6 col-sm-12 col-sm-offset-5">
                <h4 className='title mt-3 mb-3 text-center text-secondary'>Data in Chart</h4>
                 <div className="mb-5" style={{height:"300px",width:"400px"}}><PieChart/> </div></div>
        </div>
       
        <a id="more"></a>
        <hr/>
        <h2 class="sub-header mt-5">Use card decks for equal height rows of cards</h2>
        <div class="mb-3">
            <div class="card-deck">
                <div class="card card-inverse card-success text-center">
                    <div class="card-body">
                        <blockquote class="card-blockquote">
                            <p>It's really good news that the new Bootstrap 4 now has support for CSS 3 flexbox.</p>
                            <footer>Makes flexible layouts <cite title="Source Title">Faster</cite></footer>
                        </blockquote>
                    </div>
                </div>
                <div class="card card-inverse card-danger text-center">
                    <div class="card-body">
                        <blockquote class="card-blockquote">
                            <p>The Bootstrap 3.x element that was called "Panel" before, is now called a "Card".</p>
                            <footer>All of this makes more <cite title="Source Title">Sense</cite></footer>
                        </blockquote>
                    </div>
                </div>
                <div class="card card-inverse card-warning text-center">
                    <div class="card-body">
                        <blockquote class="card-blockquote">
                            <p>There are also some interesting new text classes for uppercase and capitalize.</p>
                            <footer>These handy utilities make it <cite title="Source Title">Easy</cite></footer>
                        </blockquote>
                    </div>
                </div>
                <div class="card card-inverse card-info text-center">
                    <div class="card-body">
                        <blockquote class="card-blockquote">
                            <p>If you want to use cool icons in Bootstrap 4, you'll have to find your own such as Font Awesome or Ionicons.</p>
                            <footer>The Glyphicons are not <cite title="Source Title">Included</cite></footer>
                        </blockquote>
                    </div>
                </div>
            </div>
        </div>
        
 
        <a id="flexbox"></a>
        <hr/>
        <h2 class="mt-5">Masonry-style grid columns</h2>
        <h6>with Bootstrap 4 flexbox</h6>
 
        <div class="card-columns mb-3">
            <div class="card">
                <img class="card-img-top img-fluid" src="//placehold.it/600x200/444/fff?text=..." alt="Card image cap"/>
                <div class="card-body">
                    <h4 class="card-title">New XL Grid Tier</h4>
                    <p class="card-text">With screens getting smaller, Bootstrap 4 introduces a new grid breakpoint with the col-xl-* classes. This extra tier extends the media query range all the way down to 576 px. Eventhough the new XL tier would make one think it’s been added to support extra large screens, it’s actually the opposite.</p>
                </div>
            </div>
            <div class="card card-body">
                <blockquote class="card-blockquote">
                    <p>Bootstrap 4 will be lighter and easier to customize.</p>
                    <footer>
                        <small class="text-muted">
                          Someone famous like <cite title="Source Title">Mark Otto</cite>
                        </small>
                    </footer>
                </blockquote>
            </div>
            <div class="card">
                <img class="card-img-top img-fluid" src="//placehold.it/600x200/bbb/fff?text=..." alt="Card image cap"/>
                <div class="card-body">
                    <h4 class="card-title">Card title</h4>
                    <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
            <div class="card card-body card-inverse card-primary text-center">
                <blockquote class="card-blockquote">
                    <p>Create masonry or Pinterest-style card layouts in Bootstrap 4.</p>
                    <footer>
                        <small>
                          Someone famous in <cite title="Source Title">Bootstrap</cite>
                        </small>
                    </footer>
                </blockquote>
            </div>
            <div class="card card-body text-center">
                <h4 class="card-title">Clever heading</h4>
                <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                <p class="card-text"><small class="text-muted">Last updated 5 mins ago</small></p>
            </div>
            <div class="card">
                <img class="card-img img-fluid" src="//placehold.it/600x200/777/fff?text=..." alt="Card image"/>
            </div>
            <div class="card card-body text-right">
                <blockquote class="card-blockquote">
                    <p>There are also some interesting new text classes to uppercase or capitalize.</p>
                    <footer>
                        <small class="text-muted">
                          Someone famous in <cite title="Source Title">Bootstrap</cite>
                        </small>
                    </footer>
                </blockquote>
            </div>
            <div class="card card-body">
                <h4 class="card-title">Responsive</h4>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
            <div class="card">
                <div class="card-body">
                    <ul class="list-unstyled">
                        <li class="text-capitalize"><code class="text-lowercase">text-capitalize</code> Capitalize each word</li>
                        <li class="text-uppercase"><code class="text-lowercase">text-uppercase</code> Uppercase text</li>
                        <li class="text-success"><code>text-success</code> Contextual colors for text</li>
                        <li><code>text-muted</code> <span class="text-muted">Lighten with muted</span></li>
                        <li><code>text-info</code> <span class="text-muted">Info text color</span></li>
                        <li><code>text-danger</code> <span class="text-muted">Danger text color</span></li>
                        <li><code>text-warning</code> <span class="text-muted">Warning text color</span></li>
                        <li><code>text-primary</code> <span class="text-primary">Primary text color</span></li>
                    </ul>
                </div>
            </div>
            <div class="card card-body">
                <h4 class="card-title">Heading</h4>
                <p class="card-text">So now that you've seen some of what Bootstrap 4 has to offer, are you going to give it a try?</p>
                <p class="card-text"><small class="text-muted">Last updated 12 mins ago</small></p>
            </div>
        </div>
      
 
        <a id="layouts"></a>
        <hr/>
        <h2 class="sub-header mt-5">Interesting layouts and elements</h2>
        <div class="row mb-3">
            <div class="col-lg-6">
 
                <div class="card mb-3">
                    <div class="card-header">
                        Bye .well, .panel &amp; .thumbnail
                    </div>
                    <div class="card-body">
                        <h4 class="card-title">Replaced with .card</h4>
                        <p class="card-text">All of these Bootstrap 3.x components have been dropped entirely for the new card component.</p>
                        <button type="button" class="btn btn-secondary btn-lg">Large</button>
                    </div>
                </div>
 
            </div>
            <div class="col-lg-6">
               
                <ul class="nav nav-tabs" role="tablist">
                    <li class="nav-item">
                        <a class="nav-link active" href="#home1" role="tab" data-toggle="tab">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#profile1" role="tab" data-toggle="tab">Profile</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#messages1" role="tab" data-toggle="tab">Messages</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#settings1" role="tab" data-toggle="tab">Settings</a>
                    </li>
                </ul>
 
             
                <div class="tab-content">
                    <br/>
                    <div role="tabpanel" class="tab-pane active" id="home1">
                        <h4>Home</h4>
                        <p>
                            1. These Bootstrap 4 Tabs work basically the same as the Bootstrap 3.x tabs.
                            <br/>
                            <br/>
                            <button class="btn btn-primary-outline btn-lg">Wow</button>
                        </p>
                    </div>
                    <div role="tabpanel" class="tab-pane" id="profile1">
                        <h4>Pro</h4>
                        <p>
                            2. Tabs are helpful to hide or collapse some addtional content.
                        </p>
                    </div>
                    <div role="tabpanel" class="tab-pane" id="messages1">
                        <h4>Messages</h4>
                        <p>
                            3. You can really put whatever you want into the tab pane.
                        </p>
                    </div>
                    <div role="tabpanel" class="tab-pane" id="settings1">
                        <h4>Settings</h4>
                        <p>
                            4. Some of the Bootstrap 3.x components like well and panel have been dropped for the new card component.
                        </p>
                    </div>
                </div>
            </div>
            <div class="clearfix"></div>
            <div class="col-lg-6">
                <div class="card card-default card-body">
                    <ul id="tabsJustified" class="nav nav-tabs nav-justified">
                        <li class="nav-item">
                            <a class="nav-link" href="" data-target="#tab1" data-toggle="tab">List</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" href="" data-target="#tab2" data-toggle="tab">Profile</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="" data-target="#tab3" data-toggle="tab">More</a>
                        </li>
                    </ul>
                  
                    <br/>
                    <div id="tabsJustifiedContent" class="tab-content">
                        <div class="tab-pane" id="tab1">
                            <div class="list-group">
                                <a href="" class="list-group-item"><span class="float-right label label-success">51</span> Home Link</a>
                                <a href="" class="list-group-item"><span class="float-right label label-success">8</span> Link 2</a>
                                <a href="" class="list-group-item"><span class="float-right label label-success">23</span> Link 3</a>
                                <a href="" class="list-group-item text-muted">Link n..</a>
                            </div>
                        </div>
                        <div class="tab-pane active" id="tab2">
                            <div class="row">
                                <div class="col-sm-7">
                                    <h4>Profile Section</h4>
                                    <p>Imagine creating this simple user profile inside a tab card.</p>
                                </div>
                                <div class="col-sm-5"><img src="//placehold.it/170" class="float-right img-responsive img-rounded"/></div>
                            </div>
                            <hr/>
                            <a href="javascript:;" class="btn btn-info btn-block">Read More Profiles</a>
                            <div class="spacer5"></div>
                        </div>
                        <div class="tab-pane" id="tab3">
                            <div class="list-group">
                                <a href="" class="list-group-item"><span class="float-right label label-info label-pill">44</span> <code>.panel</code> is now <code>.card</code></a>
                                <a href="" class="list-group-item"><span class="float-right label label-info label-pill">8</span> <code>.nav-justified</code> is deprecated</a>
                                <a href="" class="list-group-item"><span class="float-right label label-info label-pill">23</span> <code>.badge</code> is now <code>.label-pill</code></a>
                                <a href="" class="list-group-item text-muted">Message n..</a>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
 
            <div class="col-lg-6">
                <div id="accordion" role="tablist" aria-multiselectable="true">
                  <div class="card">
                    <div class="card-header" role="tab" id="headingOne"  data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                          Accordion example
                    </div>
                    <div id="collapseOne" class="card-block collapse in" role="tabpanel" aria-labelledby="headingOne">
                         <p>This is a Bootstrap 4 accordion that uses the <code>.card</code> classes instead of <code>.panel</code>. The single-open section aspect is not working because the parent option (dependent on .panel) has not yet been finalized in BS 4 alpha. </p>
                    </div>
                    <div class="card-header" role="tab" id="headingTwo" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                          Mobile-first
                    </div>
                    <div id="collapseTwo" class="card-block collapse" role="tabpanel" aria-labelledby="headingTwo">
                         <p>Just like it's predecesor, Bootstrap 4 is mobile-first so that you start by designing for smaller devices such as smartphones and tablets, then proceed to laptop and desktop layouts.</p>
                    </div>
                    <div class="card-header" role="tab" id="headingThree"  data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                          Built for CSS3
                    </div>
                    <div id="collapseThree" class="card-block collapse" role="tabpanel" aria-labelledby="headingThree">
                         <p>Bootstrap employs a handful of important global styles and settings that you’ll need to be aware of when using it, all of which are almost exclusively geared towards the normalization of cross browser styles.</p>
                    </div>
                  </div>
                </div>
                <p class="mt-4">
                    <a href="/go/KrUO8QpyXP/bootstrao-4-dashboard" target="_ext">Get this Bootstrap 4 admin dashboard at Codeply</a>
                </p>
            </div>
        </div>
 
    </div>
    )
}
 
export default Dashboard