class AppUrl {
  
  static BaseURL = 'http://127.0.0.1:8000/api';

  // Home page routes to backend Laravel API
  static TotalHomeDetails = this.BaseURL + '/homedata';
  static HomeTopTitle = this.BaseURL + '/homedata/title';
  static HomeTechDescription = this.BaseURL + '/homedata/tech';
  static HomeVideo = this.BaseURL + '/homedata/video';
  // Project details routes
  static ProjectAll = this.BaseURL + '/projectdata';
  static ProjectHome = this.BaseURL + '/projectdata/home';
  static ProjectDetails = this.BaseURL + '/projectdata/details';
  // Service route
  static Services = this.BaseURL + '/servicedata';
  // Information Routes
  static AllInformation = this.BaseURL + '/informationdata';
  static RefundInformation = this.BaseURL + '/informationdata/refund';
  static TermsInformation = this.BaseURL + '/informationdata/terms';
  static PrivacyInformation = this.BaseURL + '/informationdata/privacy';
  // Artwork route
  static CourseAll = this.BaseURL + 'course/all';
  static CourseHome = this.BaseURL + 'course/home';
  static CourseDetails = this.BaseURL + 'course/details';
  // Contact form route
  static ContactSend = this.BaseURL + '/contactsend';
  // Client Reviews route
  static ClientReviewsAll = this.BaseURL + '/clientreviewdata';
  // Chart Data
  static ChartDataAll = this.BaseURL + '/chartdata';

}

export default AppUrl