import React from "react";
// Layouts
import AuthLayout from "./layouts/Auth";
import PresentationLayout from "./layouts/Presentation";
import NormalLayout from "./layouts/Normal";
import SALayout from "./layouts/SALayout";

// Guards
import AuthGuard from "./components/guards/AuthGuard";

// Contexts
import { HomeProvider } from "./contexts/HomeContext";
import { AdminProvider } from "./contexts/AdminContext";
import { EventProvider } from "./contexts/EventContext";
import { WAFRuleProvider } from "./contexts/WAFRuleContext";
import { SiteProvider } from "./contexts/SiteContext";
import { SslConfigProvider } from "./contexts/SslConfigContext";
import { PaywallProvider } from "./contexts/PaywallContext";

// Landing
import Landing from "./pages/landing";

// Auth components
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";
import SignOut from "./pages/auth/SignOut";
import ForgotPassword from "./pages/auth/ForgotPassword";
import VerifyEmail from "./pages/auth/VerifyEmail";
import ResetPassword from "./pages/auth/ResetPassword";
import Page404 from "./pages/error/Page404";
import Page500 from "./pages/error/Page500";

// Home
import Home from "./pages/home";
// Application
import Application from "./pages/application";
import Websites from "./pages/application/sites.js";
import NewWebsite from "./pages/application/newSite.js";
import SSLOverview from "./pages/application/ssl/overview";
import SSLConfig from "./pages/application/ssl/config";

// application/waf
import WAFDashboard from "./pages/application/waf/dashboard";
import WAFConfig from "./pages/application/waf/config";
import WAFRule from "./pages/application/waf/rule";
import WAFException from "./pages/application/waf/exception";
import NewWAFExcption from "./pages/application/waf/newException";
import EditWAFExcption from "./pages/application/waf/editException";

// application/admin
import Webhook from "./pages/application/admin/webhook";
import Users from "./pages/application/admin/users";
import Paywall from "./pages/application/admin/paywall";
import PlanSummary from "./pages/application/admin/plan";

// application/analytics
import AnalyticsEvents from "./pages/application/analytics/events";
import AnalyticsEventsDetail from "./pages/application/analytics/detail";
import AnalyticsEventsRawJson from "./pages/application/analytics/rawjson";
// profile
import Profile from "./pages/profile.js";

// Super Admin
import SADataRetention from "./pages/super/dataRetention";
import SAElastic from "./pages/super/elastic";
import SAGeneral from "./pages/super/general";
import SALog from "./pages/super/log";
import SAWAFDashboardHealth from "./pages/super/monitor/dashboard";
import SAWAFEdgeHealth from "./pages/super/monitor/edge";
import SAOrganisation from "./pages/super/organisation";
import SAPaymentConfig from "./pages/super/payment/config";
import SAPaymentHistory from "./pages/super/payment/history";
import SAPaymentPackage from "./pages/super/payment/package";
import SARule from "./pages/super/rule";
import SASSLStatus from "./pages/super/ssl/state";
import SASSLZero from "./pages/super/ssl/zero";
import SAUser from "./pages/super/user";
import SAUserReport from "./pages/super/user/report";
import SAWAFList from "./pages/super/waf";
import SAWAFConfig from "./pages/super/waf/config";
import SAHome from "./pages/super";

const routes = [
    {
        path: "super/application",
        element: (
            <AuthGuard>
                <SALayout />
            </AuthGuard>
        ),
        children: [
            {
                path: "data_retention",
                element: <SADataRetention />,
            },
            {
                path: "elastic",
                element: <SAElastic />,
            },
            {
                path: "general",
                element: <SAGeneral />,
            },
            {
                path: "log",
                element: <SALog />,
            },
            {
                path: "monitor/dashboard",
                element: <SAWAFDashboardHealth />,
            },
            {
                path: "monitor/edge",
                element: <SAWAFEdgeHealth />,
            },
            {
                path: "organisation",
                element: <SAOrganisation />,
            },
            {
                path: "payment/config",
                element: <SAPaymentConfig />,
            },
            {
                path: "payment/history",
                element: <SAPaymentHistory />,
            },
            {
                path: "payment/package",
                element: <SAPaymentPackage />,
            },
            {
                path: "rule",
                element: <SARule />,
            },
            {
                path: "ssl/status",
                element: <SASSLStatus />,
            },
            {
                path: "ssl/zero",
                element: <SASSLZero />,
            },
            {
                path: "user/list",
                element: <SAUser />,
            },
            {
                path: "user/report",
                element: <SAUserReport />,
            },
            {
                path: "waf_edge/list",
                element: <SAWAFList />,
            },
            {
                path: "waf_edge/config",
                element: <SAWAFConfig />,
            },
        ],
    },
    {
        path: "/super/home",
        element: (
            <AuthGuard>
                <SALayout />
            </AuthGuard>
        ),
        children: [
            {
                path: "",
                element: <SAHome />,
            },
        ],
    },
    {
        path: "",
        element: <PresentationLayout />,
        children: [
            {
                path: "",
                element: <Landing />,
            },
        ],
    },
    {
        path: "auth",
        element: <AuthLayout />,
        children: [
            {
                path: "signin",
                element: <SignIn />,
            },
            {
                path: "signup",
                element: <SignUp />,
            },
            {
                path: "signout",
                element: <SignOut />,
            },
            {
                path: "forgotpassword",
                element: <ForgotPassword />,
            },
            {
                path: "verify-email/:token",
                element: <VerifyEmail />,
            },
            {
                path: "reset-password/:token",
                element: <ResetPassword />,
            },
        ],
    },
    {
        path: "",
        element: (
            <AuthGuard>
                <SiteProvider>
                    <NormalLayout />
                </SiteProvider>
            </AuthGuard>
        ),
        children: [
            {
                path: "home",
                element: (
                    <HomeProvider>
                        <Home />
                    </HomeProvider>
                ),
            },
            {
                path: "profile",
                element: <Profile />,
            },
        ],
    },
    {
        path: "application",
        element: (
            <AuthGuard>
                <SiteProvider>
                    <NormalLayout />
                </SiteProvider>
            </AuthGuard>
        ),
        children: [
            {
                path: "",
                element: <Application />,
            },
            {
                path: "sites",
                element: <Websites />,
            },
            {
                path: "sites/new",
                element: <NewWebsite />,
            },
            {
                path: ":configSite/ssl",
                element: (
                    <SslConfigProvider>
                        <SSLOverview />
                    </SslConfigProvider>
                ),
            },
            {
                path: ":configSite/ssl/config",
                element: (
                    <SslConfigProvider>
                        <SSLConfig />
                    </SslConfigProvider>
                ),
            },
        ],
    },
    {
        path: "application",
        element: (
            <AuthGuard>
                <SiteProvider>
                    <NormalLayout />
                </SiteProvider>
            </AuthGuard>
        ),
        children: [
            {
                path: ":configSite/waf/dashboard",
                element: <WAFDashboard />,
            },
            {
                path: ":configSite/waf/config",
                element: (
                    <WAFRuleProvider>
                        <WAFConfig />
                    </WAFRuleProvider>
                ),
            },
            {
                path: ":configSite/waf/config/rule",
                element: (
                    <WAFRuleProvider>
                        <WAFRule />
                    </WAFRuleProvider>
                ),
            },
            {
                path: ":configSite/waf/exception",
                element: (
                    <WAFRuleProvider>
                        <WAFException />
                    </WAFRuleProvider>
                ),
            },
            {
                path: ":configSite/waf/exception/new",
                element: (
                    <WAFRuleProvider>
                        <NewWAFExcption />
                    </WAFRuleProvider>
                ),
            },
            {
                path: ":configSite/waf/exception/edit/:exceptionID",
                element: (
                    <WAFRuleProvider>
                        <EditWAFExcption />
                    </WAFRuleProvider>
                ),
            },
        ],
    },
    {
        path: "/application/analytics",
        element: (
            <AuthGuard>
                <SiteProvider>
                    <NormalLayout />
                </SiteProvider>
            </AuthGuard>
        ),
        children: [
            {
                path: "events",
                element: (
                    <EventProvider>
                        <AnalyticsEvents />
                    </EventProvider>
                ),
            },
            {
                path: "events/:eventID",
                element: (
                    <EventProvider>
                        <AnalyticsEventsDetail />
                    </EventProvider>
                ),
            },
            {
                path: "events/json/:eventID",
                element: (
                    <EventProvider>
                        <AnalyticsEventsRawJson />
                    </EventProvider>
                ),
            },
        ],
    },
    {
        path: "/application/admin",
        element: (
            <AuthGuard>
                <SiteProvider>
                    <NormalLayout />
                </SiteProvider>
            </AuthGuard>
        ),
        children: [
            {
                path: "log",
                element: (
                    <AdminProvider>
                        <Webhook />
                    </AdminProvider>
                ),
            },
            {
                path: "account",
                element: (
                    <AdminProvider>
                        <Users />
                    </AdminProvider>
                ),
            },
            {
                path: "plan",
                element: (
                    <PaywallProvider>
                        <PlanSummary />
                    </PaywallProvider>
                ),
            },
            {
                path: "plan/pay/:planID",
                element: (
                    <PaywallProvider>
                        <Paywall />
                    </PaywallProvider>
                ),
            },
        ],
    },
    {
        path: "",
        element: (
            <AuthGuard>
                <AuthLayout />
            </AuthGuard>
        ),
        children: [
            {
                path: "*",
                element: <Page404 />,
            },
            {
                path: "500",
                element: <Page500 />,
            },
        ],
    },
];
export default routes;
