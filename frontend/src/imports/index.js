//! User
export { default as Login } from "../Page/Authentication/Login";
export { default as Register } from "../Page/Authentication/Register";
export { default as Forget } from "../Page/Authentication/Forget";
export { default as Reset } from "../Page/Authentication/Reset";
export { default as Loading } from "../Page/Loading/Loading";
export { default as LoadingSmall } from "../Page/Loading/LoadingSmall";
export { default as LoadingAnimation } from "../Page/Loading/LoadingAnimation";
export { default as NotFound } from "../Page/NotFound/NotFound";
export { default as Home } from "../Page/Home/Home";
export { default as MetaData } from "../Page/MetaData/MetaData";
export { default as HeaderWelcome } from "../Component/Welcome_page/HeaderWelcome";
export { default as TabComponent } from "../Component/Welcome_page/TabComponent";
export { default as Tab } from "../Component/Welcome_page/Tab";
export { default as Header } from "../Component/Header/Header";
export { default as Sidebar } from "../Component/Sidebar/Sidebar";
export { default as Feature } from "../Component/Sidebar/Feature";
export { default as List } from "../Component/Sidebar/List";
export { default as ListItem } from "../Component/Sidebar/ListItem";
export { default as Modal } from "../Component/Modal/Modal";
export { default as ProfileGate } from "../Page/ProfileGate/ProfileGate";
export { default as Watch } from "../Component/Watch/Watch";
export { default as Footer } from "../Component/Sidebar/Footer";
export { default as FeedBack } from "../Page/Feedback/FeedBack";
export { default as Profile } from "../Component/Profile/Profile";
export { default as EditProfile } from "../Component/Profile/EditProfile";
export { default as ChangePassword } from "../Component/Profile/ChangePassword";
export { default as ManageProfile } from "../Page/ProfileGate/ManageProfile";
export { default as Recommend } from "../Component/Modal/Recommend";
export { default as Movie } from "../Page/Movie/Movie";
//!Admin
export { default as LoginAdmin } from "../Page/Admins/LoginAdmin";
export { default as ForgetAdmin } from "../Component/Admins/ForgetAdmin";
export { default as ResetAdmin } from "../Component/Admins/ResetAdmin";
export { default as ChangePasswordAdmin } from "../Page/Admins/ChangePasswordAdmin";
export { default as Director } from "../Page/Admins/Director";
export { default as NewUser } from "../Component/Admins/NewUser";
export { default as LoadingImage } from "../Component/Admins/Loading/LoadingImage";
export { default as NewDirector } from "../Component/Admins/NewDirector";
export { default as Category } from "../Component/Admins/Category";
export { default as SeriesFilm } from "../Component/Admins/SeriesFilm";
export { default as Films } from "../Page/Admins/Films";
export { default as NewFilm } from "../Component/Admins/NewFilm";
export { default as Favourite } from "../Component/Admins/Favourite";
export { Rating } from "../Component/Admins/Rating";
//!file Small Context
export { default as UserApi } from "../Contexts/UserApi";
export { default as AdultApi } from "../Contexts/AdultApi";
//!Custom Hook
export { default as useDesUpImage } from "../CustomHook/useDesUpImage";
export { default as InputField } from "../CustomHook/useInputField";
export { default as useRequireInput } from "../CustomHook/useRequireInput";
export { default as useTogglePassword } from "../CustomHook/useTogglePassword";
export { default as useMotionStyle } from "../CustomHook/useMotionStyle";
//!Private Route Admin
export { default as LoadingToRedirectAdmin } from "../Page/PrivateRouterAdmin/LoadingToRedirectAdmin";
export { default as LoadingToRedirectAuth } from "../Page/PrivateRouterAdmin/LoadingToRedirectAuth";
export { default as PrivateRouterAdmin } from "../Page/PrivateRouterAdmin/PrivateRouterAdmin";
export { default as PrivateRouterAuthAdmin } from "../Page/PrivateRouterAdmin/PrivateRouterAuthAdmin";
//!Private Route User
export { default as LoadingToRedirect } from "../Page/PrivateRouterUser/LoadingToRedirect";
export { default as LoadingToRedirects } from "../Page/PrivateRouterUser/LoadingToRedirects";
export { default as PrivateRouter } from "../Page/PrivateRouterUser/PrivateRouter";
export { default as PrivateRouterAuth } from "../Page/PrivateRouterUser/PrivateRouterAuth";
