import React from "react";
import {
  Category,
  Component,
  Palette,
  Variant
} from "@react-buddy/ide-toolbox";
import {
  AndroidOutlined,
  AppleOutlined,
  AppstoreOutlined,
  CaretRightOutlined,
  ClockCircleOutlined,
  CloseCircleOutlined,
  DownOutlined,
  EditOutlined,
  EllipsisOutlined,
  FrownFilled,
  FrownOutlined,
  HomeOutlined,
  LikeOutlined,
  LoadingOutlined,
  MailOutlined,
  MehOutlined,
  NotificationOutlined,
  QuestionCircleOutlined,
  SearchOutlined,
  SettingOutlined,
  SmileOutlined,
  SolutionOutlined,
  UserOutlined,
  YoutubeOutlined,
  StepBackwardOutlined,
  StepForwardOutlined,
  FastBackwardOutlined,
  FastForwardOutlined,
  ShrinkOutlined,
  ArrowsAltOutlined,
  UpOutlined,
  LeftOutlined,
  RightOutlined,
  CaretUpOutlined,
  CaretDownOutlined,
  CaretLeftOutlined,
  UpCircleOutlined,
  DownCircleOutlined,
  LeftCircleOutlined,
  RightCircleOutlined,
  DoubleRightOutlined,
  DoubleLeftOutlined,
  VerticalLeftOutlined,
  VerticalRightOutlined,
  VerticalAlignTopOutlined,
  VerticalAlignMiddleOutlined,
  VerticalAlignBottomOutlined,
  ForwardOutlined,
  BackwardOutlined,
  RollbackOutlined,
  EnterOutlined,
  RetweetOutlined,
  SwapOutlined,
  SwapLeftOutlined,
  SwapRightOutlined,
  ArrowUpOutlined,
  ArrowDownOutlined,
  ArrowLeftOutlined,
  ArrowRightOutlined,
  PlayCircleOutlined,
  UpSquareOutlined,
  DownSquareOutlined,
  LeftSquareOutlined,
  RightSquareOutlined,
  LoginOutlined,
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  BorderBottomOutlined,
  BorderHorizontalOutlined,
  BorderInnerOutlined,
  BorderOuterOutlined,
  BorderLeftOutlined,
  BorderRightOutlined,
  BorderTopOutlined,
  BorderVerticleOutlined,
  PicCenterOutlined,
  PicLeftOutlined,
  PicRightOutlined,
  RadiusBottomleftOutlined,
  RadiusBottomrightOutlined,
  RadiusUpleftOutlined,
  RadiusUprightOutlined,
  FullscreenOutlined,
  FullscreenExitOutlined,
  QuestionOutlined,
  PlusOutlined,
  PlusCircleOutlined,
  PauseOutlined,
  PauseCircleOutlined,
  MinusOutlined,
  MinusCircleOutlined,
  PlusSquareOutlined,
  MinusSquareOutlined,
  InfoOutlined,
  InfoCircleOutlined,
  ExclamationOutlined,
  ExclamationCircleOutlined,
  CloseOutlined,
  CloseSquareOutlined,
  CheckOutlined,
  CheckCircleOutlined,
  CheckSquareOutlined,
  WarningOutlined,
  IssuesCloseOutlined,
  StopOutlined,
  FormOutlined,
  CopyOutlined,
  ScissorOutlined,
  DeleteOutlined,
  SnippetsOutlined,
  DiffOutlined,
  HighlightOutlined,
  AlignCenterOutlined,
  AlignLeftOutlined,
  AlignRightOutlined,
  BgColorsOutlined,
  BoldOutlined,
  ItalicOutlined,
  UnderlineOutlined,
  StrikethroughOutlined,
  RedoOutlined,
  UndoOutlined,
  ZoomInOutlined,
  ZoomOutOutlined,
  FontColorsOutlined,
  FontSizeOutlined,
  LineHeightOutlined,
  DashOutlined,
  SmallDashOutlined,
  SortAscendingOutlined,
  SortDescendingOutlined,
  DragOutlined,
  OrderedListOutlined,
  UnorderedListOutlined,
  RadiusSettingOutlined,
  ColumnWidthOutlined,
  ColumnHeightOutlined,
  AreaChartOutlined,
  PieChartOutlined,
  BarChartOutlined,
  DotChartOutlined,
  LineChartOutlined,
  RadarChartOutlined,
  HeatMapOutlined,
  FallOutlined,
  RiseOutlined,
  StockOutlined,
  BoxPlotOutlined,
  FundOutlined,
  SlidersOutlined,
  WindowsOutlined,
  IeOutlined,
  ChromeOutlined,
  GithubOutlined,
  AliwangwangOutlined,
  DingdingOutlined,
  WeiboSquareOutlined,
  WeiboCircleOutlined,
  TaobaoCircleOutlined,
  Html5Outlined,
  WeiboOutlined,
  TwitterOutlined,
  WechatOutlined,
  AlipayCircleOutlined,
  TaobaoOutlined,
  SkypeOutlined,
  QqOutlined,
  MediumWorkmarkOutlined,
  GitlabOutlined,
  MediumOutlined,
  LinkedinOutlined,
  GooglePlusOutlined,
  DropboxOutlined,
  FacebookOutlined,
  CodepenOutlined,
  CodeSandboxOutlined,
  AmazonOutlined,
  GoogleOutlined,
  CodepenCircleOutlined,
  AlipayOutlined,
  AntDesignOutlined,
  AntCloudOutlined,
  AliyunOutlined,
  ZhihuOutlined,
  SlackOutlined,
  SlackSquareOutlined,
  BehanceOutlined,
  BehanceSquareOutlined,
  DribbbleOutlined,
  DribbbleSquareOutlined,
  InstagramOutlined,
  YuqueOutlined,
  AlibabaOutlined,
  YahooOutlined,
  RedditOutlined,
  SketchOutlined,
  AccountBookOutlined,
  AimOutlined,
  AlertOutlined,
  ApartmentOutlined,
  ApiOutlined,
  AppstoreAddOutlined,
  AudioOutlined,
  AudioMutedOutlined,
  AuditOutlined,
  BankOutlined,
  BarcodeOutlined,
  BarsOutlined,
  BellOutlined,
  BlockOutlined,
  BookOutlined,
  BorderOutlined,
  BorderlessTableOutlined,
  BranchesOutlined,
  BugOutlined,
  BuildOutlined,
  BulbOutlined,
  CalculatorOutlined,
  CalendarOutlined,
  CameraOutlined,
  CarOutlined,
  CarryOutOutlined,
  CiCircleOutlined,
  CiOutlined,
  ClearOutlined,
  CloudDownloadOutlined,
  CloudOutlined,
  CloudServerOutlined,
  CloudSyncOutlined,
  CloudUploadOutlined,
  ClusterOutlined,
  CodeOutlined,
  CoffeeOutlined,
  CommentOutlined,
  CompassOutlined,
  CompressOutlined,
  ConsoleSqlOutlined,
  ContactsOutlined,
  ContainerOutlined,
  ControlOutlined,
  CopyrightOutlined,
  CreditCardOutlined,
  CrownOutlined,
  CustomerServiceOutlined,
  DashboardOutlined,
  DatabaseOutlined,
  DeleteColumnOutlined,
  DeleteRowOutlined,
  DeliveredProcedureOutlined,
  DeploymentUnitOutlined,
  DesktopOutlined,
  DingtalkOutlined,
  DisconnectOutlined,
  DislikeOutlined,
  DollarCircleOutlined,
  DollarOutlined,
  DownloadOutlined,
  EnvironmentOutlined,
  EuroCircleOutlined,
  EuroOutlined,
  ExceptionOutlined,
  ExpandAltOutlined,
  ExpandOutlined,
  ExperimentOutlined,
  ExportOutlined,
  EyeOutlined,
  EyeInvisibleOutlined,
  FieldBinaryOutlined,
  FieldNumberOutlined,
  FieldStringOutlined,
  FieldTimeOutlined,
  FileAddOutlined,
  FileDoneOutlined,
  FileExcelOutlined,
  FileExclamationOutlined,
  FileOutlined,
  FileGifOutlined,
  FileImageOutlined,
  FileJpgOutlined,
  FileMarkdownOutlined,
  FilePdfOutlined,
  FilePptOutlined,
  FileProtectOutlined,
  FileSearchOutlined,
  FileSyncOutlined,
  FileTextOutlined,
  FileUnknownOutlined,
  FileWordOutlined,
  FileZipOutlined,
  FilterOutlined,
  FireOutlined,
  FlagOutlined,
  FolderAddOutlined,
  FolderOutlined,
  FolderOpenOutlined,
  FolderViewOutlined,
  ForkOutlined,
  FormatPainterOutlined,
  FunctionOutlined,
  FundProjectionScreenOutlined,
  FundViewOutlined,
  FunnelPlotOutlined,
  GatewayOutlined,
  GifOutlined,
  GiftOutlined,
  GlobalOutlined,
  GoldOutlined,
  GroupOutlined,
  HddOutlined,
  HeartOutlined,
  HistoryOutlined,
  HolderOutlined,
  HourglassOutlined,
  IdcardOutlined,
  ImportOutlined,
  InboxOutlined,
  InsertRowAboveOutlined,
  InsertRowBelowOutlined,
  InsertRowLeftOutlined,
  InsertRowRightOutlined,
  InsuranceOutlined,
  InteractionOutlined,
  KeyOutlined,
  LaptopOutlined,
  LayoutOutlined,
  LineOutlined,
  LinkOutlined,
  Loading3QuartersOutlined,
  LockOutlined,
  MacCommandOutlined,
  ManOutlined,
  MedicineBoxOutlined,
  MenuOutlined,
  MergeCellsOutlined,
  MessageOutlined,
  MobileOutlined,
  MoneyCollectOutlined,
  MonitorOutlined,
  MoreOutlined,
  NodeCollapseOutlined,
  NodeExpandOutlined,
  NodeIndexOutlined,
  NumberOutlined,
  OneToOneOutlined,
  PartitionOutlined,
  PaperClipOutlined,
  PayCircleOutlined,
  PercentageOutlined,
  PhoneOutlined,
  PictureOutlined,
  PlaySquareOutlined,
  PoundCircleOutlined,
  PoweroffOutlined,
  PrinterOutlined,
  ProfileOutlined,
  ProjectOutlined,
  PropertySafetyOutlined,
  PullRequestOutlined,
  PushpinOutlined,
  QrcodeOutlined,
  ReadOutlined,
  ReconciliationOutlined,
  RedEnvelopeOutlined,
  ReloadOutlined,
  RestOutlined,
  RobotOutlined,
  RocketOutlined,
  RotateLeftOutlined,
  RotateRightOutlined,
  SafetyCertificateOutlined,
  SafetyOutlined,
  SaveOutlined,
  ScanOutlined,
  ScheduleOutlined,
  SecurityScanOutlined,
  SelectOutlined,
  SendOutlined,
  ShakeOutlined,
  ShareAltOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  SisternodeOutlined,
  SkinOutlined,
  SoundOutlined,
  SplitCellsOutlined,
  StarOutlined,
  SubnodeOutlined,
  SwitcherOutlined,
  SyncOutlined,
  TableOutlined,
  TabletOutlined,
  TagOutlined,
  TagsOutlined,
  TeamOutlined,
  ThunderboltOutlined,
  ToTopOutlined,
  ToolOutlined,
  TrademarkCircleOutlined,
  TrademarkOutlined,
  TransactionOutlined,
  TranslationOutlined,
  TrophyOutlined,
  UngroupOutlined,
  UnlockOutlined,
  UploadOutlined,
  UsbOutlined,
  UserAddOutlined,
  UserDeleteOutlined,
  UserSwitchOutlined,
  UsergroupAddOutlined,
  UsergroupDeleteOutlined,
  VerifiedOutlined,
  VideoCameraAddOutlined,
  VideoCameraOutlined,
  WalletOutlined,
  WhatsAppOutlined,
  WifiOutlined,
  WomanOutlined,
  StepBackwardFilled,
  StepForwardFilled,
  FastBackwardFilled,
  FastForwardFilled,
  CaretUpFilled,
  CaretDownFilled,
  CaretLeftFilled,
  CaretRightFilled,
  UpCircleFilled,
  DownCircleFilled,
  LeftCircleFilled,
  RightCircleFilled,
  ForwardFilled,
  BackwardFilled,
  PlayCircleFilled,
  UpSquareFilled,
  DownSquareFilled,
  LeftSquareFilled,
  RightSquareFilled,
  QuestionCircleFilled,
  PlusCircleFilled,
  PauseCircleFilled,
  MinusCircleFilled,
  PlusSquareFilled,
  MinusSquareFilled,
  InfoCircleFilled,
  ExclamationCircleFilled,
  CloseCircleFilled,
  CloseSquareFilled,
  CheckCircleFilled,
  CheckSquareFilled,
  ClockCircleFilled,
  WarningFilled,
  StopFilled,
  EditFilled,
  CopyFilled,
  DeleteFilled,
  SnippetsFilled,
  DiffFilled,
  HighlightFilled,
  PieChartFilled,
  BoxPlotFilled,
  FundFilled,
  SlidersFilled,
  AndroidFilled,
  AppleFilled,
  WindowsFilled,
  ChromeFilled,
  GithubFilled,
  AliwangwangFilled,
  WeiboSquareFilled,
  WeiboCircleFilled,
  TaobaoCircleFilled,
  Html5Filled,
  WechatFilled,
  YoutubeFilled,
  AlipayCircleFilled,
  SkypeFilled,
  GitlabFilled,
  LinkedinFilled,
  FacebookFilled,
  CodeSandboxCircleFilled,
  CodepenCircleFilled,
  SlackSquareFilled,
  BehanceSquareFilled,
  DribbbleSquareFilled,
  InstagramFilled,
  YuqueFilled,
  YahooFilled,
  AccountBookFilled,
  AlertFilled,
  AlipaySquareFilled,
  AmazonCircleFilled,
  ApiFilled,
  AppstoreFilled,
  AudioFilled,
  BankFilled,
  BehanceCircleFilled,
  BellFilled,
  BookFilled,
  BugFilled,
  BuildFilled,
  CalculatorFilled,
  CalendarFilled,
  CameraFilled,
  CarFilled,
  CarryOutFilled,
  CiCircleFilled,
  CloudFilled,
  CodeFilled,
  CodeSandboxSquareFilled,
  CodepenSquareFilled,
  CompassFilled,
  ContactsFilled,
  ContainerFilled,
  ControlFilled,
  CreditCardFilled,
  CrownFilled,
  CustomerServiceFilled,
  DashboardFilled,
  DatabaseFilled,
  DingtalkCircleFilled,
  DingtalkSquareFilled,
  DislikeFilled,
  DollarCircleFilled,
  DribbbleCircleFilled,
  DropboxCircleFilled,
  DropboxSquareFilled,
  EnvironmentFilled,
  EuroCircleFilled,
  ExperimentFilled,
  EyeFilled,
  EyeInvisibleFilled,
  FileAddFilled,
  FileExcelFilled,
  FileExclamationFilled,
  FileFilled,
  FileImageFilled,
  FileMarkdownFilled,
  FilePdfFilled,
  FilePptFilled,
  FileTextFilled,
  FileUnknownFilled,
  FileWordFilled,
  FileZipFilled,
  FilterFilled,
  FireFilled,
  FlagFilled,
  FolderAddFilled,
  FolderFilled,
  FolderOpenFilled,
  FormatPainterFilled,
  FunnelPlotFilled,
  GiftFilled,
  GoldFilled,
  GoldenFilled,
  GoogleCircleFilled,
  GooglePlusCircleFilled,
  GooglePlusSquareFilled,
  GoogleSquareFilled,
  HddFilled,
  HeartFilled,
  HomeFilled,
  HourglassFilled,
  IdcardFilled,
  IeCircleFilled,
  IeSquareFilled,
  InsuranceFilled,
  InteractionFilled,
  LayoutFilled,
  LikeFilled,
  LockFilled,
  MacCommandFilled,
  MailFilled,
  MedicineBoxFilled,
  MediumCircleFilled,
  MediumSquareFilled,
  MehFilled,
  MessageFilled,
  MobileFilled,
  MoneyCollectFilled,
  NotificationFilled,
  PayCircleFilled,
  PhoneFilled,
  PictureFilled,
  PlaySquareFilled,
  PoundCircleFilled,
  PrinterFilled,
  ProfileFilled,
  ProjectFilled,
  PropertySafetyFilled,
  PushpinFilled,
  QqCircleFilled,
  QqSquareFilled,
  ReadFilled,
  ReconciliationFilled,
  RedEnvelopeFilled,
  RedditCircleFilled,
  RedditSquareFilled,
  RestFilled,
  RobotFilled,
  RocketFilled,
  SafetyCertificateFilled,
  SaveFilled,
  ScheduleFilled,
  SecurityScanFilled,
  SettingFilled,
  ShopFilled,
  ShoppingFilled,
  SignalFilled,
  SketchCircleFilled,
  SketchSquareFilled,
  SkinFilled,
  SlackCircleFilled,
  SmileFilled,
  SoundFilled,
  StarFilled,
  SwitcherFilled,
  TabletFilled,
  TagFilled,
  TagsFilled,
  TaobaoSquareFilled,
  ThunderboltFilled,
  ToolFilled,
  TrademarkCircleFilled,
  TrophyFilled,
  TwitterCircleFilled,
  TwitterSquareFilled,
  UnlockFilled,
  UsbFilled,
  VideoCameraFilled,
  WalletFilled,
  ZhihuCircleFilled,
  ZhihuSquareFilled,
  UpCircleTwoTone,
  DownCircleTwoTone,
  LeftCircleTwoTone,
  RightCircleTwoTone,
  PlayCircleTwoTone,
  UpSquareTwoTone,
  DownSquareTwoTone,
  LeftSquareTwoTone,
  RightSquareTwoTone,
  QuestionCircleTwoTone,
  PlusCircleTwoTone,
  PauseCircleTwoTone,
  MinusCircleTwoTone,
  PlusSquareTwoTone,
  MinusSquareTwoTone,
  InfoCircleTwoTone,
  ExclamationCircleTwoTone,
  CloseCircleTwoTone,
  CloseSquareTwoTone,
  CheckCircleTwoTone,
  CheckSquareTwoTone,
  ClockCircleTwoTone,
  WarningTwoTone,
  StopTwoTone,
  EditTwoTone,
  CopyTwoTone,
  DeleteTwoTone,
  SnippetsTwoTone,
  DiffTwoTone,
  HighlightTwoTone,
  PieChartTwoTone,
  BoxPlotTwoTone,
  FundTwoTone,
  SlidersTwoTone,
  Html5TwoTone,
  AccountBookTwoTone,
  AlertTwoTone,
  ApiTwoTone,
  AppstoreTwoTone,
  AudioTwoTone,
  BankTwoTone,
  BellTwoTone,
  BookTwoTone,
  BugTwoTone,
  BuildTwoTone,
  BulbTwoTone,
  CalculatorTwoTone,
  CalendarTwoTone,
  CameraTwoTone,
  CarTwoTone,
  CarryOutTwoTone,
  CiCircleTwoTone,
  CiTwoTone,
  CloudTwoTone,
  CreditCardTwoTone,
  CrownTwoTone,
  CustomerServiceTwoTone,
  DashboardTwoTone,
  DatabaseTwoTone,
  CodeTwoTone,
  CompassTwoTone,
  ContactsTwoTone,
  ContainerTwoTone,
  ControlTwoTone,
  DislikeTwoTone,
  DollarCircleTwoTone,
  DollarTwoTone,
  EnvironmentTwoTone,
  EuroCircleTwoTone,
  EuroTwoTone,
  ExperimentTwoTone,
  EyeTwoTone,
  EyeInvisibleTwoTone,
  FileAddTwoTone,
  FileExcelTwoTone,
  FileExclamationTwoTone,
  FileTwoTone,
  FileImageTwoTone,
  FileMarkdownTwoTone,
  FilePdfTwoTone,
  FilePptTwoTone,
  FileTextTwoTone,
  FileUnknownTwoTone,
  FileWordTwoTone,
  FileZipTwoTone,
  FilterTwoTone,
  FireTwoTone,
  FlagTwoTone,
  FolderAddTwoTone,
  FolderTwoTone,
  FolderOpenTwoTone,
  FrownTwoTone,
  FunnelPlotTwoTone,
  GiftTwoTone,
  GoldTwoTone,
  HddTwoTone,
  HeartTwoTone,
  HomeTwoTone,
  HourglassTwoTone,
  IdcardTwoTone,
  InsuranceTwoTone,
  InteractionTwoTone,
  LayoutTwoTone,
  LikeTwoTone,
  LockTwoTone,
  MailTwoTone,
  MedicineBoxTwoTone,
  MehTwoTone,
  MessageTwoTone,
  MobileTwoTone,
  MoneyCollectTwoTone,
  NotificationTwoTone,
  PhoneTwoTone,
  PictureTwoTone,
  PlaySquareTwoTone,
  PoundCircleTwoTone,
  PrinterTwoTone,
  ProfileTwoTone,
  ProjectTwoTone,
  PropertySafetyTwoTone,
  PushpinTwoTone,
  ReconciliationTwoTone,
  RedEnvelopeTwoTone,
  RestTwoTone,
  RocketTwoTone,
  SafetyCertificateTwoTone,
  SaveTwoTone,
  ScheduleTwoTone,
  SecurityScanTwoTone,
  SettingTwoTone,
  ShopTwoTone,
  ShoppingTwoTone,
  SkinTwoTone,
  SmileTwoTone,
  SoundTwoTone,
  StarTwoTone,
  SwitcherTwoTone,
  TabletTwoTone,
  TagTwoTone,
  TagsTwoTone,
  ThunderboltTwoTone,
  ToolTwoTone,
  TrademarkCircleTwoTone,
  TrophyTwoTone,
  UnlockTwoTone,
  UsbTwoTone,
  VideoCameraTwoTone,
  WalletTwoTone,
} from '@ant-design/icons';
import Title from "antd/es/typography/Title";
import Text from "antd/es/typography/Text";
import Link from "antd/es/typography/Link";
import Button from "antd/es/button";
import Sider from "antd/es/layout/Sider";
import Col from "antd/es/grid/col";
import Layout, { Content, Footer, Header } from "antd/es/layout/layout";
import {
  Affix,
  AutoComplete,
  Avatar,
  Badge,
  Breadcrumb,
  Calendar,
  Card,
  Carousel,
  Cascader,
  Collapse,
  Comment,
  DatePicker,
  Descriptions,
  Divider,
  Dropdown,
  Form,
  Input,
  InputNumber,
  Menu,
  PageHeader,
  Pagination,
  Rate,
  Row,
  Space,
  Steps,
  Table,
  Tooltip,
  Image,
  Empty,
  List,
  Popover,
  Statistic,
  Tabs,
  Tag,
  Timeline,
  Tree,
  Drawer,
  Modal,
  Popconfirm,
  Progress,
  Result,
  Skeleton,
  Spin, Select,
  Slider,
  Switch, TimePicker
} from "antd/es";
import Checkbox from "antd/es/checkbox/Checkbox";
import Radio, { Group } from "antd/es/radio";
import SubMenu from "antd/es/menu/SubMenu";
import {Alert, ConfigProvider} from "antd";
import Meta from "antd/es/card/Meta";
import TextArea from "antd/es/input/TextArea";
import Paragraph from "antd/es/typography/Paragraph";

const palette = () => (
  <Palette>
    <Category name="Button">
      <Component name="Button">
        <Variant>
          <Button>Default Button</Button>
        </Variant>
        <Variant name="primary">
          <Button type="primary">Primary Button</Button>
        </Variant>
        <Variant name="dashed">
          <Button type="dashed">Dashed Button</Button>
        </Variant>
        <Variant name="text">
          <Button type="text">Text Button</Button>
        </Variant>
        <Variant name="link">
          <Button type="link">Link Button</Button>
        </Variant>
        <Variant name="icon - circle">
          <Button type="primary" shape="circle" icon={<SearchOutlined />} />
        </Variant>
        <Variant name="ghost">
          <Button ghost>Ghost Default</Button>
        </Variant>
        <Variant name="ghost - primary">
          <Button type="primary" ghost>
            Ghost Primary
          </Button>
        </Variant>
        <Variant name="ghost - dashed">
          <Button type="dashed" ghost>
            Ghost Dashed
          </Button>
        </Variant>
        <Variant name="ghost - link">
          <Button type="link" ghost>
            Ghost Link
          </Button>
        </Variant>
        <Variant name="danger">
          <Button danger>Danger Default</Button>
        </Variant>
        <Variant name="danger - primary">
          <Button type="primary" danger>
            Danger Primary
          </Button>
        </Variant>
        <Variant name="danger - dashed">
          <Button type="dashed" danger>
            Danger Dashed
          </Button>
        </Variant>
        <Variant name="danger - text">
          <Button type="text" danger>
            Danger Text
          </Button>
        </Variant>
        <Variant name="danger - link">
          <Button type="link" danger>
            Danger Link
          </Button>
        </Variant>
        <Variant name="block">
          <Button block>Block Default</Button>
        </Variant>
        <Variant name="block - primary">
          <Button type="primary" block>
            Block Primary
          </Button>
        </Variant>
        <Variant name="block - dashed">
          <Button type="dashed" block>
            Block Dashed
          </Button>
        </Variant>
        <Variant name="block - link">
          <Button type="link" block>
            Block Link
          </Button>
        </Variant>
      </Component>
    </Category>
    <Category name="Typography">
      <Component name="Title">
        <Variant name="h1">
          <Title>h1. Ant Design</Title>
        </Variant>
        <Variant name="h2">
          <Title level={2}>h2. Ant Design</Title>
        </Variant>
        <Variant name="h3">
          <Title level={3}>h3. Ant Design</Title>
        </Variant>
        <Variant name="h4">
          <Title level={4}>h4. Ant Design</Title>
        </Variant>
        <Variant name="h5">
          <Title level={5}>h5. Ant Design</Title>
        </Variant>
      </Component>
      <Component name="Text">
        <Variant>
          <Text>Ant Design (default)</Text>
        </Variant>
        <Variant name="secondary">
          <Text type="secondary">Ant Design (secondary)</Text>
        </Variant>
        <Variant name="success">
          <Text type="success">Ant Design (success)</Text>
        </Variant>
        <Variant name="warning">
          <Text type="warning">Ant Design (warning)</Text>
        </Variant>
        <Variant name="danger">
          <Text type="danger">Ant Design (danger)</Text>
        </Variant>
        <Variant name="disabled">
          <Text disabled>Ant Design (disabled)</Text>
        </Variant>
        <Variant name="mark">
          <Text mark>Ant Design (mark)</Text>
        </Variant>
        <Variant name="code">
          <Text code>Ant Design (code)</Text>
        </Variant>
        <Variant name="keyboard">
          <Text keyboard>Ant Design (keyboard)</Text>
        </Variant>
        <Variant name="underline">
          <Text underline>Ant Design (underline)</Text>
        </Variant>
        <Variant name="delete">
          <Text delete>Ant Design (delete)</Text>
        </Variant>
        <Variant name="strong">
          <Text strong>Ant Design (strong)</Text>
        </Variant>
        <Variant name="italic">
          <Text italic>Ant Design (italic)</Text>
        </Variant>
      </Component>
      <Component name="Link">
        <Variant>
          <Link href="https://ant.design" target="_blank">
            Ant Design (Link)
          </Link>
        </Variant>
      </Component>
    </Category>
    <Category name="Layout">
      <Component name="Grid">
        <Variant name="two cols">
          <Row>
            <Col span={12}>col-12</Col>
            <Col span={12}>col-12</Col>
          </Row>
        </Variant>
        <Variant name="three cols">
          <Row>
            <Col span={8}>col-8</Col>
            <Col span={8}>col-8</Col>
            <Col span={8}>col-8</Col>
          </Row>
        </Variant>
        <Variant name="four cols">
          <Row>
            <Col span={6}>col-6</Col>
            <Col span={6}>col-6</Col>
            <Col span={6}>col-6</Col>
            <Col span={6}>col-6</Col>
          </Row>
        </Variant>
      </Component>
      <Component name="Divider">
        <Variant>
          <Divider />
        </Variant>
        <Variant name="dashed">
          <Divider dashed />
        </Variant>
        <Variant name="with title">
          <Divider>Title</Divider>
        </Variant>
        <Variant name="vertical">
          <Divider type="vertical" />
        </Variant>
      </Component>
      <Component name="Space">
        <Variant>
          <Space></Space>
        </Variant>
        <Variant name="vertical">
          <Space direction="vertical"></Space>
        </Variant>
      </Component>
      <Component name="App Layout">
        <Variant>
          <Layout>
            <Header>Header</Header>
            <Content>Content</Content>
            <Footer>Footer</Footer>
          </Layout>
        </Variant>
        <Variant name="left sider">
          <Layout>
            <Header>Header</Header>
            <Layout>
              <Sider>Sider</Sider>
              <Content>Content</Content>
            </Layout>
            <Footer>Footer</Footer>
          </Layout>
        </Variant>
        <Variant name="right sider">
          <Layout>
            <Header>Header</Header>
            <Layout>
              <Content>Content</Content>
              <Sider>Sider</Sider>
            </Layout>
            <Footer>Footer</Footer>
          </Layout>
        </Variant>
        <Variant name="left full sider">
          <Layout>
            <Sider>Sider</Sider>
            <Layout>
              <Header>Header</Header>
              <Content>Content</Content>
              <Footer>Footer</Footer>
            </Layout>
          </Layout>
        </Variant>
      </Component>
    </Category>
    <Category name="Data Entry">
      <Component name="AutoComplete">
        <Variant>
          <AutoComplete />
        </Variant>
      </Component>
      <Component name="Cascader">
        <Variant>
          <Cascader />
        </Variant>
      </Component>
      <Component name="Checkbox">
        <Variant>
          <Checkbox>Checkbox</Checkbox>
        </Variant>
      </Component>
      <Component name="DatePicker">
        <Variant>
          <DatePicker />
        </Variant>
        <Variant name="show time">
          <DatePicker showTime={true} />
        </Variant>
        <Variant name="week">
          <DatePicker picker="week" />
        </Variant>
        <Variant name="month">
          <DatePicker picker="month" />
        </Variant>
        <Variant name="quarter">
          <DatePicker picker="quarter" />
        </Variant>
        <Variant name="year">
          <DatePicker picker="year" />
        </Variant>
        {/*
        <Variant name="range">
          <DatePicker.RangePicker/>
        </Variant>
        */}
      </Component>
      <Component name="Input">
        <Variant>
          <Input />
        </Variant>
        <Variant name="large">
          <Input size="large" />
        </Variant>
        <Variant name="small">
          <Input size="small" />
        </Variant>
        <Variant name="with prefix">
          <Input addonBefore="http://" defaultValue="mysite" />
        </Variant>
        <Variant name="with postfix">
          <Input addonAfter=".com" defaultValue="mysite" />
        </Variant>
      </Component>
      <Component name="InputNumber">
        <Variant>
          <InputNumber min={0} max={10} defaultValue={5} />
        </Variant>
      </Component>
      <Component name="Radio">
        <Variant>
          <Group>
            <Radio value={1}>A</Radio>
            <Radio value={2}>B</Radio>
            <Radio value={3}>C</Radio>
            <Radio value={4}>D</Radio>
          </Group>
        </Variant>
      </Component>
      <Component name="Rate">
        <Variant>
          <Rate />
        </Variant>
      </Component>
      <Component name="Select">
        <Variant>
          <Select defaultValue="lucy">
            <Select.Option value="jack">Jack</Select.Option>
            <Select.Option value="lucy">Lucy</Select.Option>
            <Select.Option value="disabled" disabled>
              Disabled
            </Select.Option>
          </Select>
        </Variant>
      </Component>
      <Component name="Slider">
        <Variant>
          <Slider defaultValue={30} />
        </Variant>
      </Component>
      <Component name="Switch">
        <Variant>
          <Switch defaultChecked={false}/>
        </Variant>
      </Component>
      <Component name="TimePicker">
        <Variant>
          <TimePicker/>
        </Variant>
      </Component>
    </Category>
    <Category name="Data Display">
      <Component name="Avatar">
        <Variant name="letters">
          <Avatar>User</Avatar>
        </Variant>
        <Variant name="letters - square shape">
          <Avatar shape="square">User</Avatar>
        </Variant>
        <Variant name="letters - with gap">
          <Avatar gap={4}>User</Avatar>
        </Variant>
        <Variant name="circle icon">
          <Avatar icon={<UserOutlined />} />
        </Variant>
        <Variant name="square icon">
          <Avatar shape="square" icon={<UserOutlined />} />
        </Variant>
        <Variant name="image type">
          <Avatar src="https://joeschmoe.io/api/v1/random" />
        </Variant>
        <Variant name="complex source">
          <Avatar
            src={
              <Image
                src="https://joeschmoe.io/api/v1/random"
                style={{ width: 32 }}
              />
            }
          />
        </Variant>
        <Variant name="with count badge">
          <Badge count={1}>
            <Avatar>User</Avatar>
          </Badge>
        </Variant>
        <Variant name="with dot badge">
          <Badge dot>
            <Avatar>User</Avatar>
          </Badge>
        </Variant>
        <Variant name="responsive size">
          <Avatar size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}>
            User
          </Avatar>
        </Variant>
      </Component>
      <Component name="Avatar.Group">
        <Variant>
          <Avatar.Group>
            <Avatar icon={<UserOutlined />}>U1</Avatar>
            <Avatar icon={<UserOutlined />}>U2</Avatar>
            <Avatar icon={<UserOutlined />}>U3</Avatar>
          </Avatar.Group>
        </Variant>
        <Variant name="display max count">
          <Avatar.Group maxCount={2}>
            <Avatar icon={<UserOutlined />} />
            <Avatar icon={<UserOutlined />} />
            <Avatar icon={<UserOutlined />} />
          </Avatar.Group>
        </Variant>
      </Component>
      <Component name="Badge">
        <Variant name="success status">
          <Badge status="success" />
        </Variant>
        <Variant name="success status with text">
          <Badge status="success" text="Success" />
        </Variant>
        <Variant name="count">
          <Badge count={25} />
        </Variant>
        <Variant name="icon">
          <Badge count={<ClockCircleOutlined style={{ color: "#f5222d" }} />} />
        </Variant>
        <Variant name="overflow count">
          <Badge count={100} overflowCount={99} />
        </Variant>
        <Variant name="orange color with text">
          <Badge color="orange" text="orange" />
        </Variant>
        <Variant name="on avatar - count">
          <Badge count={5}>
            <Avatar shape="square" size="large" />
          </Badge>
        </Variant>
        <Variant name="on avatar - clickable">
          <a href="#">
            <Badge count={5}>
              <Avatar shape="square" size="large" />
            </Badge>
          </a>
        </Variant>
        <Variant name="on avatar - show zero">
          <Badge count={0} showZero>
            <Avatar shape="square" size="large" />
          </Badge>
        </Variant>
        <Variant name="on avatar - icon">
          <Badge count={<ClockCircleOutlined style={{ color: "#f5222d" }} />}>
            <Avatar shape="square" size="large" />
          </Badge>
        </Variant>
        <Variant name="on avatar - overflow">
          <Badge count={99} overflowCount={10}>
            <Avatar shape="square" size="large" />
          </Badge>
        </Variant>
        <Variant name="on avatar - offset">
          <Badge count={5} offset={[10, 10]}>
            <Avatar shape="square" size="large" />
          </Badge>
        </Variant>
        <Variant name="on avatar - small sized count">
          <Badge size="small" count={5}>
            <Avatar shape="square" size="large" />
          </Badge>
        </Variant>
        <Variant name="on icon - dot">
          <Badge dot>
            <NotificationOutlined style={{ fontSize: 16 }} />
          </Badge>
        </Variant>
        <Variant name="on link - dot">
          <Badge dot>
            <a href="#">Link something</a>
          </Badge>
        </Variant>
      </Component>
      <Component name="Badge.Ribbon">
        <Variant name="on card">
          <Badge.Ribbon text="Hippies">
            <Card title="Pushes open the window" size="small">
              and raises the spyglass.
            </Card>
          </Badge.Ribbon>
        </Variant>
      </Component>
      <Component name="Calendar">
        <Variant>
          <Calendar />
        </Variant>
      </Component>
      <Component name="Card">
        <Variant name="title and content">
          <Card title="Card title">Card content</Card>
        </Variant>
        <Variant name="extra link">
          <Card title="Card title" extra={<a href="#">More</a>}>
            Card content
          </Card>
        </Variant>
        <Variant name="borderless">
          <Card title="Card title" bordered={false}>
            Card content
          </Card>
        </Variant>
        <Variant name="meta content">
          <Card title="Card title">
            <Meta title="Europe Street beat" description="www.instagram.com" />
          </Card>
        </Variant>
        <Variant name="3 in grid">
          <Row gutter={16}>
            <Col span={8}>
              <Card title="Card title">Card content</Card>
            </Col>
            <Col span={8}>
              <Card title="Card title">Card content</Card>
            </Col>
            <Col span={8}>
              <Card title="Card title">Card content</Card>
            </Col>
          </Row>
        </Variant>
        <Variant name="built-in loading">
          <Card title="Card title" loading={true}>
            Card content
          </Card>
        </Variant>
        <Variant name="skeleton loading">
          <Card title="Card title">
            <Skeleton loading={true} avatar active>
              Card content
            </Skeleton>
          </Card>
        </Variant>
        <Variant name="with actions">
          <Card
            title="Card title"
            actions={[
              <SettingOutlined key="setting" />,
              <EditOutlined key="edit" />,
              <EllipsisOutlined key="ellipsis" />
            ]}
          >
            Card content
          </Card>
        </Variant>
        <Variant name="with inner cards">
          <Card title="Card title">
            <Card type="inner" title="Inner Card title">
              Inner Card content
            </Card>
            <Card
              type="inner"
              title="Inner Card title"
              style={{ marginTop: 16 }}
            >
              Inner Card content
            </Card>
          </Card>
        </Variant>
      </Component>
      <Component name="Card.Grid">
        <Variant>
          <Card title="Card title">
            <Card.Grid>Content</Card.Grid>
            <Card.Grid>Content</Card.Grid>
          </Card>
        </Variant>
      </Component>
      <Component name="Carousel">
        <Variant>
          <Carousel>
            <div>
              <h3>1</h3>
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
          </Carousel>
        </Variant>
      </Component>
      <Component name="Collapse">
        <Variant>
          <Collapse>
            <Collapse.Panel header="This is panel header 1" key="1">
              <p>Panel content 1</p>
            </Collapse.Panel>
            <Collapse.Panel header="This is panel header 2" key="2">
              <p>Panel content 1</p>
            </Collapse.Panel>
            <Collapse.Panel header="This is panel header 3" key="3">
              <p>Panel content 1</p>
            </Collapse.Panel>
          </Collapse>
        </Variant>
        <Variant name="default active panel">
          <Collapse defaultActiveKey={["1"]}>
            <Collapse.Panel header="This is panel header 1" key="1">
              <p>Panel content 1</p>
            </Collapse.Panel>
            <Collapse.Panel header="This is panel header 2" key="2">
              <p>Panel content 1</p>
            </Collapse.Panel>
            <Collapse.Panel header="This is panel header 3" key="3">
              <p>Panel content 1</p>
            </Collapse.Panel>
          </Collapse>
        </Variant>
        <Variant name="accordion mode">
          <Collapse accordion>
            <Collapse.Panel header="This is panel header 1" key="1">
              <p>Panel content 1</p>
            </Collapse.Panel>
            <Collapse.Panel header="This is panel header 2" key="2">
              <p>Panel content 2</p>
            </Collapse.Panel>
            <Collapse.Panel header="This is panel header 3" key="3">
              <p>Panel content 3</p>
            </Collapse.Panel>
          </Collapse>
        </Variant>
        <Variant name="borderless">
          <Collapse bordered={false}>
            <Collapse.Panel header="This is panel header 1" key="1">
              <p>Panel content 1</p>
            </Collapse.Panel>
            <Collapse.Panel header="This is panel header 2" key="2">
              <p>Panel content 2</p>
            </Collapse.Panel>
            <Collapse.Panel header="This is panel header 3" key="3">
              <p>Panel content 3</p>
            </Collapse.Panel>
          </Collapse>
        </Variant>
        <Variant name="custom expand icon">
          <Collapse
            accordion
            expandIcon={({ isActive }) => (
              <CaretRightOutlined rotate={isActive ? 90 : 0} />
            )}
          >
            <Collapse.Panel header="This is panel header 1" key="1">
              <p>Panel content 1</p>
            </Collapse.Panel>
            <Collapse.Panel header="This is panel header 2" key="2">
              <p>Panel content 2</p>
            </Collapse.Panel>
            <Collapse.Panel header="This is panel header 3" key="3">
              <p>Panel content 3</p>
            </Collapse.Panel>
          </Collapse>
        </Variant>
        <Variant name="no arrow">
          <Collapse>
            <Collapse.Panel
              header="This is panel header 1"
              key="1"
              showArrow={false}
            >
              <p>Panel content 1</p>
            </Collapse.Panel>
            <Collapse.Panel
              header="This is panel header 2"
              key="2"
              showArrow={false}
            >
              <p>Panel content 1</p>
            </Collapse.Panel>
            <Collapse.Panel
              header="This is panel header 3"
              key="3"
              showArrow={false}
            >
              <p>Panel content 1</p>
            </Collapse.Panel>
          </Collapse>
        </Variant>
        <Variant name="expand icon - position right">
          <Collapse expandIconPosition="right">
            <Collapse.Panel header="This is panel header 1" key="1">
              <p>Panel content 1</p>
            </Collapse.Panel>
            <Collapse.Panel header="This is panel header 2" key="2">
              <p>Panel content 1</p>
            </Collapse.Panel>
            <Collapse.Panel header="This is panel header 3" key="3">
              <p>Panel content 1</p>
            </Collapse.Panel>
          </Collapse>
        </Variant>
        <Variant name="ghost">
          <Collapse ghost>
            <Collapse.Panel header="This is panel header 1" key="1">
              <p>Panel content 1</p>
            </Collapse.Panel>
            <Collapse.Panel header="This is panel header 2" key="2">
              <p>Panel content 1</p>
            </Collapse.Panel>
            <Collapse.Panel header="This is panel header 3" key="3">
              <p>Panel content 1</p>
            </Collapse.Panel>
          </Collapse>
        </Variant>
      </Component>
      <Component name="Comment">
        <Variant name="basic">
          <Comment
            actions={[<span key="comment-nested-reply-to">Reply to</span>]}
            author={<a>Han Solo</a>}
            avatar={
              <Avatar
                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                alt="Han Solo"
              />
            }
            content={
              <p>
                We supply a series of design principles, practical patterns and
                high quality design resources (Sketch and Axure).
              </p>
            }
          ></Comment>
        </Variant>
        <Variant name="usage with list">
          <List
            header="2 replies"
            itemLayout="horizontal"
            dataSource={[
              {
                actions: [<span key="comment-list-reply-to-0">Reply to</span>],
                author: "Han Solo",
                avatar: "https://joeschmoe.io/api/v1/random",
                content: (
                  <p>
                    We supply a series of design principles, practical patterns
                    and high quality design resources (Sketch and Axure), to
                    help people create their product prototypes beautifully and
                    efficiently.
                  </p>
                ),
                datetime: <span>2022-01-01</span>
              },
              {
                actions: [<span key="comment-list-reply-to-0">Reply to</span>],
                author: "Han Solo",
                avatar: "https://joeschmoe.io/api/v1/random",
                content: (
                  <p>
                    We supply a series of design principles, practical patterns
                    and high quality design resources (Sketch and Axure), to
                    help people create their product prototypes beautifully and
                    efficiently.
                  </p>
                ),
                datetime: <span>2022-01-01</span>
              }
            ]}
            renderItem={item => (
              <li>
                <Comment
                  actions={item.actions}
                  author={item.author}
                  avatar={item.avatar}
                  content={item.content}
                  datetime={item.datetime}
                />
              </li>
            )}
          />
        </Variant>
        <Variant name="reply editor">
          <Comment
            avatar={
              <Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />
            }
            content={
              <>
                <Form.Item>
                  <TextArea rows={4} />
                </Form.Item>
                <Form.Item>
                  <Button htmlType="submit" type="primary">
                    Add Comment
                  </Button>
                </Form.Item>
              </>
            }
          />
        </Variant>
      </Component>
      <Component name="Descriptions">
        <Variant>
          <Descriptions title="User Info">
            <Descriptions.Item label="UserName">Jack Smith</Descriptions.Item>
          </Descriptions>
        </Variant>
        <Variant name="bordered">
          <Descriptions title="User Info" bordered>
            <Descriptions.Item label="UserName">Jack Smith</Descriptions.Item>
          </Descriptions>
        </Variant>
        <Variant name="small size">
          <Descriptions title="User Info" size="small">
            <Descriptions.Item label="UserName">Jack Smith</Descriptions.Item>
          </Descriptions>
        </Variant>
        <Variant name="responsive size">
          <Descriptions
            title="User Info"
            column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
          >
            <Descriptions.Item label="UserName">Jack Smith</Descriptions.Item>
          </Descriptions>
        </Variant>
      </Component>
      <Component name="Empty">
        <Variant name="basic">
          <Empty />
        </Variant>
        <Variant name="antd image">
          <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
        </Variant>
        <Variant name="image source">
          <Empty
            image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
            imageStyle={{ height: 60 }}
          />
        </Variant>
        <Variant name="with description">
          <Empty description={<span>Description</span>} />
        </Variant>
        <Variant name="no description">
          <Empty description={false} />
        </Variant>
        <Variant name="with extra content">
          <Empty>
            <Button type="primary">Create Now</Button>
          </Empty>
        </Variant>
        <Variant name="provide globally">
          <ConfigProvider
            renderEmpty={() => (
              <div style={{ textAlign: "center" }}>
                <SmileOutlined style={{ fontSize: 20 }} />
                <p>Data Not Found</p>
              </div>
            )}
          ></ConfigProvider>
        </Variant>
      </Component>
      <Component name="Image">
        <Variant name="basic">
          <Image
            width={200}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          />
        </Variant>
        <Variant name="custom preview">
          <Image
            width={200}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
            preview={{
              src:
                "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            }}
          />
        </Variant>
        <Variant name="fault tolerant">
          <Image
            width={200}
            height={200}
            src="error"
            fallback="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
          />
        </Variant>
      </Component>
      <Component name="Image.PreviewGroup">
        <Variant>
          <Image.PreviewGroup>
            <Image
              width={200}
              src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
            />
            <Image
              width={200}
              src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
            />
          </Image.PreviewGroup>
        </Variant>
      </Component>
      <Component name="List">
        <Variant name="basic">
          <List
            dataSource={["Foo", "Bar"]}
            renderItem={item => <List.Item>{item}</List.Item>}
          />
        </Variant>
        <Variant name="with footer and header">
          <List
            header={<div>Header</div>}
            footer={<div>Footer</div>}
            dataSource={["Foo", "Bar"]}
            renderItem={item => <List.Item>{item}</List.Item>}
          />
        </Variant>
        <Variant name="items with meta and extra img">
          <List
            itemLayout="vertical"
            dataSource={[
              {
                title: "Foo",
                href: "https://ant.design",
                avatar: "https://joeschmoe.io/api/v1/random",
                description:
                  "Ant Design, a design language for background applications, is refined by Ant UED Team.",
                content:
                  "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently."
              },
              {
                title: "Bar",
                href: "https://ant.design",
                avatar: "https://joeschmoe.io/api/v1/random",
                description:
                  "Ant Design, a design language for background applications, is refined by Ant UED Team.",
                content:
                  "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently."
              }
            ]}
            renderItem={item => (
              <List.Item
                extra={
                  <img
                    width={272}
                    alt="logo"
                    src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                  />
                }
              >
                <List.Item.Meta
                  avatar={<Avatar src={item.avatar} />}
                  title={<a href={item.href}>{item.title}</a>}
                  description={item.description}
                />
                {item.content}
              </List.Item>
            )}
          />
        </Variant>
        <Variant name="grid layout">
          <List
            grid={{ gutter: 16, column: 4 }}
            dataSource={[
              { title: "Title 1" },
              { title: "Title 2" },
              { title: "Title 3" }
            ]}
            renderItem={item => (
              <List.Item>
                <Card title={item.title}>Card content</Card>
              </List.Item>
            )}
          />
        </Variant>
        <Variant name="responsive grid layout">
          <List
            grid={{ gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 3 }}
            dataSource={[
              { title: "Title 1" },
              { title: "Title 2" },
              { title: "Title 3" }
            ]}
            renderItem={item => (
              <List.Item>
                <Card title={item.title}>Card content</Card>
              </List.Item>
            )}
          />
        </Variant>
      </Component>
      <Component name="Popover">
        <Variant name="basic">
          <Popover content="Content" title="Title">
            <Button type="primary">Hover me</Button>
          </Popover>
        </Variant>
        <Variant name="trigger by focus">
          <Popover content="Content" title="Title" trigger="focus">
            <Button>Focus me</Button>
          </Popover>
        </Variant>
        <Variant name="trigger by click">
          <Popover content="Content" title="Title" trigger="click">
            <Button>Click me</Button>
          </Popover>
        </Variant>
        <Variant name="arrow pointer at center">
          <Popover
            placement="topLeft"
            title="Title"
            content="Content"
            arrowPointAtCenter
          >
            <Button>Arrow points to center</Button>
          </Popover>
        </Variant>
        <Variant name="placement - right top">
          <Popover
            placement="rightTop"
            title="Title"
            content="Content"
            trigger="click"
          >
            <Button>RT</Button>
          </Popover>
        </Variant>
      </Component>
      <Component name="Statistic">
        <Variant name="basic">
          <Statistic title="Active Users" value={112893} />
        </Variant>
        <Variant name="loading">
          <Statistic title="Active Users" value={112893} loading />
        </Variant>
        <Variant name="with precision">
          <Statistic
            title="Account Balance (CNY)"
            value={112893}
            precision={2}
          />
        </Variant>
        <Variant name="prefix icon">
          <Statistic title="Feedback" value={1128} prefix={<LikeOutlined />} />
        </Variant>
        <Variant name="suffix text">
          <Statistic title="Unmerged" value={93} suffix=" / 100" />
        </Variant>
        <Variant name="in card">
          <Row gutter={16}>
            <Col span={12}>
              <Card>
                <Statistic title="Active" value={11.28} />
              </Card>
            </Col>
            <Col span={12}>
              <Card>
                <Statistic title="Idle" value={9.3} />
              </Card>
            </Col>
          </Row>
        </Variant>
      </Component>
      <Component name="Table">
        <Variant name="basic">
          <Table
            columns={[
              { title: "Name", dataIndex: "name" },
              { title: "Age", dataIndex: "age" }
            ]}
            dataSource={[
              { key: 1, name: "John", age: 30 },
              { key: 2, name: "Lucy", age: 31 }
            ]}
          />
        </Variant>
        <Variant name="jsx style">
          <Table
            dataSource={[
              { key: 1, name: "John", age: 30 },
              { key: 2, name: "Lucy", age: 31 }
            ]}
          >
            <Table.Column title="Name" dataIndex="name" key="name" />
            <Table.Column title="Age" dataIndex="age" key="age" />
          </Table>
        </Variant>
        <Variant name="checkbox selection">
          <Table
            rowSelection={{ type: "checkbox" }}
            columns={[
              { title: "Name", dataIndex: "name" },
              { title: "Age", dataIndex: "age" }
            ]}
            dataSource={[
              { key: 1, name: "John", age: 30 },
              { key: 2, name: "Lucy", age: 31 }
            ]}
          />
        </Variant>
        <Variant name="radio selection">
          <Table
            rowSelection={{ type: "radio" }}
            columns={[
              { title: "Name", dataIndex: "name" },
              { title: "Age", dataIndex: "age" }
            ]}
            dataSource={[
              { key: 1, name: "John", age: 30 },
              { key: 2, name: "Lucy", age: 31 }
            ]}
          />
        </Variant>
        <Variant name="groups selection">
          <Table
            rowSelection={{
              type: "checkbox",
              selections: [
                Table.SELECTION_ALL,
                Table.SELECTION_INVERT,
                Table.SELECTION_NONE
              ]
            }}
            columns={[
              { title: "Name", dataIndex: "name" },
              { title: "Age", dataIndex: "age" }
            ]}
            dataSource={[
              { key: 1, name: "John", age: 30 },
              { key: 2, name: "Lucy", age: 31 }
            ]}
          />
        </Variant>
        <Variant name="filter and sorter">
          <Table
            columns={[
              {
                title: "Name",
                dataIndex: "name",
                filters: [
                  {
                    text: "John",
                    value: "John"
                  },
                  {
                    text: "Lucy",
                    value: "Lucy"
                  }
                ],
                onFilter: (value: any, record) =>
                  record.name.indexOf(value) === 0
              },
              {
                title: "Age",
                dataIndex: "age",
                sorter: (a, b) => a.age - b.age
              }
            ]}
            dataSource={[
              { key: 1, name: "John", age: 30 },
              { key: 2, name: "Lucy", age: 31 }
            ]}
          />
        </Variant>
        <Variant name="middle size">
          <Table
            size="middle"
            columns={[
              { title: "Name", dataIndex: "name" },
              { title: "Age", dataIndex: "age" }
            ]}
            dataSource={[
              { key: 1, name: "John", age: 30 },
              { key: 2, name: "Lucy", age: 31 }
            ]}
          />
        </Variant>
        <Variant name="title and footer">
          <Table
            title={() => "Header"}
            footer={() => "Footer"}
            size="middle"
            columns={[
              { title: "Name", dataIndex: "name" },
              { title: "Age", dataIndex: "age" }
            ]}
            dataSource={[
              { key: 1, name: "John", age: 30 },
              { key: 2, name: "Lucy", age: 31 }
            ]}
          />
        </Variant>
        <Variant name="expandable rows">
          <Table
            columns={[
              { title: "Name", dataIndex: "name" },
              { title: "Age", dataIndex: "age" }
            ]}
            dataSource={[
              {
                key: 1,
                name: "John",
                age: 30,
                description: "My name is John Brown, I am 32 years old"
              },
              { key: 2, name: "Lucy", age: 31 }
            ]}
            expandable={{
              expandedRowRender: (record: any) => (
                <p style={{ margin: 0 }}>{record.description}</p>
              ),
              rowExpandable: record => record.name !== "Lucy"
            }}
          />
        </Variant>
        <Variant name="row span">
          <Table
            columns={[
              { title: "Name", dataIndex: "name" },
              { title: "Age", dataIndex: "age" },
              {
                title: "Phone",
                dataIndex: "phone",
                render: (value, row, index) => {
                  if (index === 0) {
                    return {
                      children: value,
                      props: { rowSpan: 2 }
                    };
                  }
                  if (index === 1) {
                    return {
                      children: value,
                      props: { rowSpan: 0 }
                    };
                  }
                  return value;
                }
              }
            ]}
            dataSource={[
              { key: 1, name: "John", age: 30, phone: "0575-22098909" },
              { key: 2, name: "Lucy", age: 31, phone: "0575-22098909" },
              { key: 3, name: "Joe", age: 25, phone: "0571-22098333" }
            ]}
          />
        </Variant>
        <Variant name="col span">
          <Table
            columns={[
              {
                title: "Name",
                dataIndex: "name",
                render: (value, record, index) => {
                  if (index === 2) {
                    return { children: value, props: { colSpan: 3 } };
                  }
                  return value;
                }
              },
              {
                title: "Age",
                dataIndex: "age",
                render: (value, record, index) => {
                  if (index === 2) {
                    return { children: value, props: { colSpan: 0 } };
                  }
                  return value;
                }
              },
              {
                title: "Phone",
                dataIndex: "phone",
                render: (value, record, index) => {
                  if (index === 2) {
                    return { children: value, props: { colSpan: 0 } };
                  }
                  return value;
                }
              }
            ]}
            dataSource={[
              { key: 1, name: "John", age: 30, phone: "0575-22098909" },
              { key: 2, name: "Lucy", age: 31, phone: "0575-22098909" },
              { key: 3, name: "Joe", age: 25, phone: "0571-22098333" }
            ]}
          />
        </Variant>
        <Variant name="tree data">
          <Table
            columns={[
              {
                title: "Name",
                dataIndex: "name",
                key: "name"
              },
              {
                title: "Age",
                dataIndex: "age",
                key: "age",
                width: "12%"
              },
              {
                title: "Address",
                dataIndex: "address",
                width: "30%",
                key: "address"
              }
            ]}
            dataSource={[
              {
                key: 1,
                name: "John Brown sr.",
                age: 60,
                address: "New York No. 1 Lake Park",
                children: [
                  {
                    key: 11,
                    name: "John Brown",
                    age: 42,
                    address: "New York No. 2 Lake Park"
                  },
                  {
                    key: 12,
                    name: "John Brown jr.",
                    age: 30,
                    address: "New York No. 3 Lake Park",
                    children: [
                      {
                        key: 121,
                        name: "Jimmy Brown",
                        age: 16,
                        address: "New York No. 3 Lake Park"
                      }
                    ]
                  },
                  {
                    key: 13,
                    name: "Jim Green sr.",
                    age: 72,
                    address: "London No. 1 Lake Park",
                    children: [
                      {
                        key: 131,
                        name: "Jim Green",
                        age: 42,
                        address: "London No. 2 Lake Park",
                        children: [
                          {
                            key: 1311,
                            name: "Jim Green jr.",
                            age: 25,
                            address: "London No. 3 Lake Park"
                          },
                          {
                            key: 1312,
                            name: "Jimmy Green sr.",
                            age: 18,
                            address: "London No. 4 Lake Park"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                key: 2,
                name: "Joe Black",
                age: 32,
                address: "Sidney No. 1 Lake Park"
              }
            ]}
          />
        </Variant>
        <Variant name="fixed header">
          <Table
            dataSource={Array.from(Array(30).keys()).map((value, index) => ({
              key: index,
              name: `Edward King ${index}`,
              age: 32,
              address: `London, Park Lane no. ${index}`
            }))}
            scroll={{ y: 240 }}
            columns={[
              {
                title: "Name",
                dataIndex: "name",
                width: 150
              },
              {
                title: "Age",
                dataIndex: "age",
                width: 150
              },
              {
                title: "Address",
                dataIndex: "address"
              }
            ]}
          />
        </Variant>
        <Variant name="ellipsis">
          <Table
            columns={[
              { title: "Name", dataIndex: "name", ellipsis: true },
              { title: "address", dataIndex: "address", ellipsis: true }
            ]}
            dataSource={[
              {
                key: 1,
                name: "John",
                address: "Long Column Long Column Long Column"
              },
              {
                key: 2,
                name: "Lucy",
                address: "Long Column Long Column Long Column"
              }
            ]}
          />
        </Variant>
        <Variant name="summary">
          <Table
            columns={[
              { title: "Name", dataIndex: "name" },
              { title: "Age", dataIndex: "age" }
            ]}
            dataSource={[
              { key: 1, name: "John", age: 30 },
              { key: 2, name: "Lucy", age: 31 }
            ]}
            summary={() => (
              <Table.Summary fixed>
                <Table.Summary.Row>
                  <Table.Summary.Cell index={0}>Summary</Table.Summary.Cell>
                  <Table.Summary.Cell index={1}>
                    This is a summary content
                  </Table.Summary.Cell>
                </Table.Summary.Row>
              </Table.Summary>
            )}
          />
        </Variant>
        <Variant name="responsive">
          <Table
            columns={[
              {
                title: "Name (all screens)",
                dataIndex: "name",
                key: "name",
                render: text => <a>{text}</a>
              },
              {
                title: "Age (medium screen or bigger)",
                dataIndex: "age",
                key: "age",
                responsive: ["md"]
              },
              {
                title: "Address (large screen or bigger)",
                dataIndex: "address",
                key: "address",
                responsive: ["lg"]
              }
            ]}
            dataSource={[
              {
                key: "1",
                name: "John Brown",
                age: 32,
                address: "New York No. 1 Lake Park"
              }
            ]}
          />
        </Variant>
        <Variant name="pagination none">
          <Table
            columns={[
              { title: "Name", dataIndex: "name" },
              { title: "Age", dataIndex: "age" }
            ]}
            dataSource={[
              { key: 1, name: "John", age: 30 },
              { key: 2, name: "Lucy", age: 31 }
            ]}
            pagination={false}
          />
        </Variant>
        <Variant name="pagination top right">
          <Table
            columns={[
              { title: "Name", dataIndex: "name" },
              { title: "Age", dataIndex: "age" }
            ]}
            dataSource={[
              { key: 1, name: "John", age: 30 },
              { key: 2, name: "Lucy", age: 31 }
            ]}
            pagination={{ position: ["topRight", "none" as any] }}
          />
        </Variant>
      </Component>
      <Component name="Tabs">
        <Variant name="basic">
          <Tabs>
            <Tabs.TabPane tab="Tab 1" key="1">
              Content of Tab Pane 1
            </Tabs.TabPane>
            <Tabs.TabPane tab="Tab 2" key="2">
              Content of Tab Pane 2
            </Tabs.TabPane>
            <Tabs.TabPane tab="Tab 3" key="3">
              Content of Tab Pane 3
            </Tabs.TabPane>
          </Tabs>
        </Variant>
        <Variant name="default active key">
          <Tabs defaultActiveKey="1">
            <Tabs.TabPane tab="Tab 1" key="1">
              Content of Tab Pane 1
            </Tabs.TabPane>
            <Tabs.TabPane tab="Tab 2" key="2">
              Content of Tab Pane 2
            </Tabs.TabPane>
            <Tabs.TabPane tab="Tab 3" key="3">
              Content of Tab Pane 3
            </Tabs.TabPane>
          </Tabs>
        </Variant>
        <Variant name="centred">
          <Tabs centered>
            <Tabs.TabPane tab="Tab 1" key="1">
              Content of Tab Pane 1
            </Tabs.TabPane>
            <Tabs.TabPane tab="Tab 2" key="2">
              Content of Tab Pane 2
            </Tabs.TabPane>
            <Tabs.TabPane tab="Tab 3" key="3">
              Content of Tab Pane 3
            </Tabs.TabPane>
          </Tabs>
        </Variant>
        <Variant name="with icon">
          <Tabs>
            <Tabs.TabPane
              tab={
                <span>
                  <AppleOutlined />
                  Tab 1
                </span>
              }
              key="1"
            >
              Tab 1
            </Tabs.TabPane>
            <Tabs.TabPane
              tab={
                <span>
                  <AndroidOutlined />
                  Tab 2
                </span>
              }
              key="2"
            >
              Tab 2
            </Tabs.TabPane>
          </Tabs>
        </Variant>
        <Variant name="tab position left">
          <Tabs tabPosition="left">
            <Tabs.TabPane tab="Tab 1" key="1">
              Content of Tab Pane 1
            </Tabs.TabPane>
            <Tabs.TabPane tab="Tab 2" key="2">
              Content of Tab Pane 2
            </Tabs.TabPane>
            <Tabs.TabPane tab="Tab 3" key="3">
              Content of Tab Pane 3
            </Tabs.TabPane>
          </Tabs>
        </Variant>
        <Variant name="with extra actions on both sides">
          <Tabs
            tabBarExtraContent={{
              left: (
                <Button style={{ marginRight: "16px" }}>
                  Left Extra Action
                </Button>
              ),
              right: (
                <Button style={{ marginLeft: "16px" }}>
                  Right Extra Action
                </Button>
              )
            }}
          >
            <Tabs.TabPane tab="Tab 1" key="1">
              Content of Tab Pane 1
            </Tabs.TabPane>
            <Tabs.TabPane tab="Tab 2" key="2">
              Content of Tab Pane 2
            </Tabs.TabPane>
            <Tabs.TabPane tab="Tab 3" key="3">
              Content of Tab Pane 3
            </Tabs.TabPane>
          </Tabs>
        </Variant>
        <Variant name="type card">
          <Tabs type="card">
            <Tabs.TabPane tab="Tab 1" key="1">
              Content of Tab Pane 1
            </Tabs.TabPane>
            <Tabs.TabPane tab="Tab 2" key="2">
              Content of Tab Pane 2
            </Tabs.TabPane>
            <Tabs.TabPane tab="Tab 3" key="3">
              Content of Tab Pane 3
            </Tabs.TabPane>
          </Tabs>
        </Variant>
        <Variant name="type editable-card">
          <Tabs type="editable-card">
            <Tabs.TabPane tab="Tab 1" key="1">
              Content of Tab Pane 1
            </Tabs.TabPane>
            <Tabs.TabPane tab="Tab 2" key="2">
              Content of Tab Pane 2
            </Tabs.TabPane>
            <Tabs.TabPane tab="Tab 3" key="3">
              Content of Tab Pane 3
            </Tabs.TabPane>
          </Tabs>
        </Variant>
      </Component>
      <Component name="Tag">
        <Variant name="basic">
          <Tag>Tag</Tag>
        </Variant>
        <Variant name="closable">
          <Tag closable>Tag</Tag>
        </Variant>
        <Variant name="green color">
          <Tag color="green">green</Tag>
        </Variant>
        <Variant name="custom color">
          <Tag color="#f50">#f50</Tag>
        </Variant>
        <Variant name="with icon">
          <Tag icon={<YoutubeOutlined />} color="#cd201f">
            Youtube
          </Tag>
        </Variant>
      </Component>
      <Component name="Timeline">
        <Variant name="basic">
          <Timeline>
            <Timeline.Item>Step 1</Timeline.Item>
            <Timeline.Item>Step 2</Timeline.Item>
            <Timeline.Item>Step 3</Timeline.Item>
          </Timeline>
        </Variant>
        <Variant name="colored">
          <Timeline>
            <Timeline.Item color="green">Step 1</Timeline.Item>
            <Timeline.Item color="red">Step 2</Timeline.Item>
          </Timeline>
        </Variant>
        <Variant name="mode left">
          <Timeline mode="left">
            <Timeline.Item label="2015-09-01">Step 1</Timeline.Item>
            <Timeline.Item label="2015-09-01 09:12:11">Step 2</Timeline.Item>
          </Timeline>
        </Variant>
        <Variant name="mode right">
          <Timeline mode="right">
            <Timeline.Item label="2015-09-01">Step 1</Timeline.Item>
            <Timeline.Item label="2015-09-01 09:12:11">Step 2</Timeline.Item>
          </Timeline>
        </Variant>
        <Variant name="mode alternate">
          <Timeline mode="alternate">
            <Timeline.Item label="2015-09-01">Step 1</Timeline.Item>
            <Timeline.Item label="2015-09-01 09:12:11">Step 2</Timeline.Item>
          </Timeline>
        </Variant>
        <Variant name="with icon">
          <Timeline>
            <Timeline.Item>Step 1</Timeline.Item>
            <Timeline.Item
              dot={<ClockCircleOutlined style={{ fontSize: "16px" }} />}
              color="red"
            >
              Step 2
            </Timeline.Item>
          </Timeline>
        </Variant>
      </Component>
      <Component name="Tooltip">
        <Variant name="basic">
          <Tooltip title="Prompt text">
            <span>Tooltip will show on mouse enter.</span>
          </Tooltip>
        </Variant>
        <Variant name="arrow point at center">
          <Tooltip arrowPointAtCenter title="Prompt Text">
            <Button>Arrow points to center</Button>
          </Tooltip>
        </Variant>
        <Variant name="placement - right top">
          <Tooltip placement="rightTop" title="Prompt Text">
            <Button>RT</Button>
          </Tooltip>
        </Variant>
        <Variant name="orange color">
          <Tooltip title="Prompt text" color="orange">
            <Button>Orange</Button>
          </Tooltip>
        </Variant>
        <Variant name="custom color">
          <Tooltip title="Prompt text" color="#2db7f5">
            <Button>#2db7f5</Button>
          </Tooltip>
        </Variant>
      </Component>
      <Component name="Tree">
        <Variant name="basic">
          <Tree
            checkable
            defaultExpandedKeys={["0-0-0", "0-0-1"]}
            defaultSelectedKeys={["0-0-0", "0-0-1"]}
            defaultCheckedKeys={["0-0-0", "0-0-1"]}
            treeData={[
              {
                title: "parent 1",
                key: "0-0",
                children: [
                  {
                    title: "parent 1-0",
                    key: "0-0-0",
                    disabled: true,
                    children: [
                      {
                        title: "leaf",
                        key: "0-0-0-0",
                        disableCheckbox: true
                      },
                      {
                        title: "leaf",
                        key: "0-0-0-1"
                      }
                    ]
                  },
                  {
                    title: "parent 1-1",
                    key: "0-0-1",
                    children: [
                      {
                        title: <span style={{ color: "#1890ff" }}>sss</span>,
                        key: "0-0-1-0"
                      }
                    ]
                  }
                ]
              }
            ]}
          />
        </Variant>
        <Variant name="directory tree">
          <Tree.DirectoryTree
            treeData={[
              {
                title: "parent 0",
                key: "0-0",
                children: [
                  { title: "leaf 0-0", key: "0-0-0", isLeaf: true },
                  { title: "leaf 0-1", key: "0-0-1", isLeaf: true }
                ]
              },
              {
                title: "parent 1",
                key: "0-1",
                children: [
                  { title: "leaf 1-0", key: "0-1-0", isLeaf: true },
                  { title: "leaf 1-1", key: "0-1-1", isLeaf: true }
                ]
              }
            ]}
          />
        </Variant>
        <Variant name="show line">
          <Tree
            showLine
            treeData={[
              {
                title: "parent 0",
                key: "0-0",
                children: [
                  {
                    title: "leaf 0-0",
                    key: "0-0-0",
                    children: [
                      { title: "leaf 0-0-1", key: "0-0-0-1", isLeaf: true }
                    ]
                  },
                  { title: "leaf 0-1", key: "0-0-1", isLeaf: true }
                ]
              }
            ]}
          />
        </Variant>
        <Variant name="custom icons">
          <Tree
            showIcon
            defaultExpandAll
            treeData={[
              {
                title: "parent 1",
                key: "0-0",
                icon: <SmileOutlined />,
                children: [
                  {
                    title: "leaf",
                    key: "0-0-0",
                    icon: <MehOutlined />
                  },
                  {
                    title: "leaf",
                    key: "0-0-1",
                    icon: ({ selected }) =>
                      selected ? <FrownFilled /> : <FrownOutlined />
                  }
                ]
              }
            ]}
          />
        </Variant>
        <Variant name="custom collapse/expand icon">
          <Tree
            switcherIcon={<DownOutlined />}
            treeData={[
              {
                title: "parent 1",
                key: "0-0",
                children: [
                  {
                    title: "leaf",
                    key: "0-0-0"
                  }
                ]
              }
            ]}
          />
        </Variant>
      </Component>
    </Category>
    <Category name="Navigation">
      <Component name="Affix">
        <Variant name="top">
          <Affix offsetTop={10}>
            <Button type="primary">Affix top</Button>
          </Affix>
        </Variant>
        <Variant name="bottom">
          <Affix offsetBottom={10}>
            <Button type="primary">Affix bottom</Button>
          </Affix>
        </Variant>
      </Component>
      <Component name="Breadcrumb">
        <Variant name="basic">
          <Breadcrumb>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>
              <a href="">Application Center</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <a href="">Application List</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>An Application</Breadcrumb.Item>
          </Breadcrumb>
        </Variant>
        <Variant name="with icons">
          <Breadcrumb>
            <Breadcrumb.Item href="">
              <HomeOutlined />
            </Breadcrumb.Item>
            <Breadcrumb.Item href="">
              <UserOutlined />
              <span>Application List</span>
            </Breadcrumb.Item>
            <Breadcrumb.Item>Application</Breadcrumb.Item>
          </Breadcrumb>
        </Variant>
        <Variant name="custom separator for all">
          <Breadcrumb separator=">">
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item href="">Application Center</Breadcrumb.Item>
            <Breadcrumb.Item href="">Application List</Breadcrumb.Item>
            <Breadcrumb.Item>An Application</Breadcrumb.Item>
          </Breadcrumb>
        </Variant>
        <Variant name="custom separator for each">
          <Breadcrumb separator="">
            <Breadcrumb.Item>Location</Breadcrumb.Item>
            <Breadcrumb.Separator>:</Breadcrumb.Separator>
            <Breadcrumb.Item href="">Application Center</Breadcrumb.Item>
            <Breadcrumb.Separator />
            <Breadcrumb.Item href="">Application List</Breadcrumb.Item>
            <Breadcrumb.Separator />
            <Breadcrumb.Item>An Application</Breadcrumb.Item>
          </Breadcrumb>
        </Variant>
        <Variant name="with drop down menu">
          <Breadcrumb>
            <Breadcrumb.Item>Ant Design</Breadcrumb.Item>
            <Breadcrumb.Item>
              <a href="">Component</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item
              overlay={
                <Menu>
                  <Menu.Item>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="http://www.alipay.com/"
                    >
                      General
                    </a>
                  </Menu.Item>
                  <Menu.Item>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="http://www.taobao.com/"
                    >
                      Layout
                    </a>
                  </Menu.Item>
                </Menu>
              }
            >
              <a href="">General</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>Button</Breadcrumb.Item>
          </Breadcrumb>
        </Variant>
      </Component>
      <Component name="Dropdown">
        <Variant name="basic">
          <Dropdown
            overlay={
              <Menu>
                <Menu.Item>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.antgroup.com"
                  >
                    1st menu item
                  </a>
                </Menu.Item>
                <Menu.Item>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.aliyun.com"
                  >
                    2nd menu item
                  </a>
                </Menu.Item>
              </Menu>
            }
            placement="bottomCenter"
          >
            <a onClick={e => e.preventDefault()}>
              Hover me <DownOutlined />
            </a>
          </Dropdown>
        </Variant>
        <Variant name="display arrow">
          <Dropdown
            overlay={
              <Menu>
                <Menu.Item>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.antgroup.com"
                  >
                    1st menu item
                  </a>
                </Menu.Item>
                <Menu.Item>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.aliyun.com"
                  >
                    2nd menu item
                  </a>
                </Menu.Item>
              </Menu>
            }
            placement="topCenter"
            arrow
          >
            <Button>topCenter</Button>
          </Dropdown>
        </Variant>
        <Variant name="trigger on click">
          <Dropdown
            overlay={
              <Menu>
                <Menu.Item>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.antgroup.com"
                  >
                    1st menu item
                  </a>
                </Menu.Item>
                <Menu.Item>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.aliyun.com"
                  >
                    2nd menu item
                  </a>
                </Menu.Item>
              </Menu>
            }
            trigger={["click"]}
          >
            <Button>Click me</Button>
          </Dropdown>
        </Variant>
        <Variant name="trigger on context menu">
          <Dropdown
            overlay={
              <Menu>
                <Menu.Item key="1">1st menu item</Menu.Item>
                <Menu.Item key="2">2nd menu item</Menu.Item>
                <Menu.Item key="3">3rd menu item</Menu.Item>
              </Menu>
            }
            trigger={["contextMenu"]}
          >
            <div>Right Click on here</div>
          </Dropdown>
        </Variant>
      </Component>
      <Component name="Menu">
        <Variant name="vertical">
          <Menu
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            mode="inline"
          >
            <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
              <Menu.ItemGroup key="g1" title="Item 1">
                <Menu.Item key="1">Option 1</Menu.Item>
                <Menu.Item key="2">Option 2</Menu.Item>
              </Menu.ItemGroup>
              <Menu.ItemGroup key="g2" title="Item 2">
                <Menu.Item key="3">Option 3</Menu.Item>
                <Menu.Item key="4">Option 4</Menu.Item>
              </Menu.ItemGroup>
            </SubMenu>
            <SubMenu
              key="sub2"
              icon={<AppstoreOutlined />}
              title="Navigation Two"
            >
              <Menu.Item key="5">Option 5</Menu.Item>
              <Menu.Item key="6">Option 6</Menu.Item>
              <SubMenu key="sub3" title="Submenu">
                <Menu.Item key="7">Option 7</Menu.Item>
                <Menu.Item key="8">Option 8</Menu.Item>
              </SubMenu>
            </SubMenu>
            <SubMenu
              key="sub4"
              icon={<SettingOutlined />}
              title="Navigation Three"
            >
              <Menu.Item key="9">Option 9</Menu.Item>
              <Menu.Item key="10">Option 10</Menu.Item>
              <Menu.Item key="11">Option 11</Menu.Item>
              <Menu.Item key="12">Option 12</Menu.Item>
            </SubMenu>
          </Menu>
        </Variant>
        <Variant name="horizontal">
          <Menu
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            mode={"horizontal"}
          >
            <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
              <Menu.ItemGroup key="g1" title="Item 1">
                <Menu.Item key="1">Option 1</Menu.Item>
                <Menu.Item key="2">Option 2</Menu.Item>
              </Menu.ItemGroup>
              <Menu.ItemGroup key="g2" title="Item 2">
                <Menu.Item key="3">Option 3</Menu.Item>
                <Menu.Item key="4">Option 4</Menu.Item>
              </Menu.ItemGroup>
            </SubMenu>
            <SubMenu
              key="sub2"
              icon={<AppstoreOutlined />}
              title="Navigation Two"
            >
              <Menu.Item key="5">Option 5</Menu.Item>
              <Menu.Item key="6">Option 6</Menu.Item>
              <SubMenu key="sub3" title="Submenu">
                <Menu.Item key="7">Option 7</Menu.Item>
                <Menu.Item key="8">Option 8</Menu.Item>
              </SubMenu>
            </SubMenu>
            <SubMenu
              key="sub4"
              icon={<SettingOutlined />}
              title="Navigation Three"
            >
              <Menu.Item key="9">Option 9</Menu.Item>
              <Menu.Item key="10">Option 10</Menu.Item>
              <Menu.Item key="11">Option 11</Menu.Item>
              <Menu.Item key="12">Option 12</Menu.Item>
            </SubMenu>
          </Menu>
        </Variant>
      </Component>
      <Component name="PageHeader">
        <Variant name="basic">
          <PageHeader
            onBack={() => null}
            title="Title"
            subTitle="This is a subtitle"
          />
        </Variant>
        <Variant name="extra">
          <PageHeader
            onBack={() => null}
            title="Title"
            subTitle="This is a subtitle"
            extra={[
              <Button key="3">Operation</Button>,
              <Button key="2">Operation</Button>,
              <Button key="1" type="primary">
                Primary
              </Button>
            ]}
          />
        </Variant>
        <Variant name="with breadcrumbs">
          <PageHeader
            title="Title"
            breadcrumb={{
              routes: [
                {
                  path: "index",
                  breadcrumbName: "First-level Menu"
                },
                {
                  path: "first",
                  breadcrumbName: "Second-level Menu"
                },
                {
                  path: "second",
                  breadcrumbName: "Third-level Menu"
                }
              ]
            }}
            subTitle="This is a subtitle"
          />
        </Variant>
      </Component>
      <Component name="Pagination">
        <Variant name="basic">
          <Pagination defaultCurrent={1} total={50} />
        </Variant>
        <Variant name="with jumper">
          <Pagination showQuickJumper defaultCurrent={2} total={500} />
        </Variant>
        <Variant name="mini size">
          <Pagination size="small" total={50} />
        </Variant>
        <Variant name="simple mode">
          <Pagination simple defaultCurrent={2} total={50} />
        </Variant>
        <Variant name="total number">
          <Pagination
            total={85}
            showTotal={(total, range) =>
              `${range[0]}-${range[1]} of ${total} items`
            }
            defaultPageSize={20}
            defaultCurrent={1}
          />
        </Variant>
        <Variant name="custom prev/next">
          <Pagination
            total={500}
            itemRender={(current, type, originalElement) => {
              if (type === "prev") {
                return <a>Previous</a>;
              }
              if (type === "next") {
                return <a>Next</a>;
              }
              return originalElement;
            }}
          />
        </Variant>
      </Component>
      <Component name="Steps">
        <Variant name="basic">
          <Steps current={1}>
            <Steps.Step title="Finished" description="This is a description." />
            <Steps.Step
              title="In Progress"
              subTitle="Left 00:00:08"
              description="This is a description."
            />
            <Steps.Step title="Waiting" description="This is a description." />
          </Steps>
        </Variant>
        <Variant name="mini">
          <Steps size="small" current={1}>
            <Steps.Step title="Finished" />
            <Steps.Step title="In Progress" />
            <Steps.Step title="Waiting" />
          </Steps>
        </Variant>
        <Variant name="with icon">
          <Steps>
            <Steps.Step status="finish" title="Login" icon={<UserOutlined />} />
            <Steps.Step
              status="finish"
              title="Verification"
              icon={<SolutionOutlined />}
            />
            <Steps.Step
              status="process"
              title="Pay"
              icon={<LoadingOutlined />}
            />
            <Steps.Step status="wait" title="Done" icon={<SmileOutlined />} />
          </Steps>
        </Variant>
        <Variant name="vertical">
          <Steps direction="vertical" current={1}>
            <Steps.Step title="Finished" description="This is a description." />
            <Steps.Step
              title="In Progress"
              description="This is a description."
            />
            <Steps.Step title="Waiting" description="This is a description." />
          </Steps>
        </Variant>
        <Variant name="vertical mini">
          <Steps direction="vertical" size="small" current={1}>
            <Steps.Step title="Finished" description="This is a description." />
            <Steps.Step
              title="In Progress"
              description="This is a description."
            />
            <Steps.Step title="Waiting" description="This is a description." />
          </Steps>
        </Variant>
        <Variant name="error status">
          <Steps current={1} status="error">
            <Steps.Step title="Finished" description="This is a description" />
            <Steps.Step
              title="In Process"
              description="This is a description"
            />
            <Steps.Step title="Waiting" description="This is a description" />
          </Steps>
        </Variant>
        <Variant name="dot style">
          <Steps progressDot current={1}>
            <Steps.Step title="Finished" description="This is a description." />
            <Steps.Step
              title="In Progress"
              description="This is a description."
            />
            <Steps.Step title="Waiting" description="This is a description." />
          </Steps>
        </Variant>
        <Variant name="custom dot style">
          <Steps
            current={1}
            progressDot={(dot, { status, index }) => (
              <Popover
                content={
                  <span>
                    step {index} status: {status}
                  </span>
                }
              >
                {dot}
              </Popover>
            )}
          >
            <Steps.Step
              title="Finished"
              description="You can hover on the dot."
            />
            <Steps.Step
              title="In Progress"
              description="You can hover on the dot."
            />
            <Steps.Step
              title="Waiting"
              description="You can hover on the dot."
            />
            <Steps.Step
              title="Waiting"
              description="You can hover on the dot."
            />
          </Steps>
        </Variant>
        <Variant name="with percent">
          <Steps current={1} percent={60}>
            <Steps.Step title="Finished" description="This is a description." />
            <Steps.Step
              title="In Progress"
              subTitle="Left 00:00:08"
              description="This is a description."
            />
            <Steps.Step title="Waiting" description="This is a description." />
          </Steps>
        </Variant>
      </Component>
    </Category>
    <Category name="Feedback">
      <Component name="Alert">
        <Variant name="error">
          <Alert message="Error Text" type="error" />
        </Variant>
        <Variant name="warning">
          <Alert message="Warning Text" type="warning" />
        </Variant>
        <Variant name="info">
          <Alert message="Info Text" type="info" />
        </Variant>
        <Variant name="success">
          <Alert message="Success Text" type="success" />
        </Variant>
        <Variant name="closable">
          <Alert
            message="Warning Text Warning Text Warning TextW arning Text Warning Text Warning TextWarning Text"
            type="warning"
            closable
          />
        </Variant>
        <Variant name="with description">
          <Alert
            message="Success Text"
            description="Success Description Success Description Success Description"
            type="success"
          />
        </Variant>
        <Variant name="success type with icon">
          <Alert message="Success Tips" type="success" showIcon />
        </Variant>
        <Variant name="error type with icon and description">
          <Alert
            message="Error"
            description="This is an error message about copywriting."
            type="error"
            showIcon
          />
        </Variant>
        <Variant name="as a banner">
          <Alert message="Warning text" banner />
        </Variant>
        <Variant name="with custom action">
          <Alert
            message="Error Text"
            showIcon
            description="Error Description Error Description Error Description Error Description"
            type="error"
            action={
              <Button size="small" danger>
                Detail
              </Button>
            }
          />
        </Variant>
        <Variant name="custom close text">
          <Alert message="Info Text" type="info" closeText="Close Now" />
        </Variant>
      </Component>
      <Component name="Drawer">
        <Variant name="placement right">
          <Drawer title="Basic Drawer" visible>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Drawer>
        </Variant>
        <Variant name="placement top">
          <Drawer title="Basic Drawer" visible placement="top">
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Drawer>
        </Variant>
        <Variant name="placement left">
          <Drawer title="Basic Drawer" visible placement="left">
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Drawer>
        </Variant>
        <Variant name="placement bottom">
          <Drawer title="Basic Drawer" visible placement="bottom">
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Drawer>
        </Variant>
        <Variant name="large">
          <Drawer title="Basic Drawer" visible size="large">
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Drawer>
        </Variant>
      </Component>
      <Component name="Modal">
        <Variant name="basic">
          <Modal title="Basic Modal" visible={true}>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Modal>
        </Variant>
        <Variant name="custom footer">
          <Modal
            title="Basic Modal"
            visible={true}
            footer={[
              <Button key="back">Return</Button>,
              <Button key="submit" type="primary">
                Submit
              </Button>,
              <Button key="link" href="https://google.com" type="primary">
                Search on Google
              </Button>
            ]}
          >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Modal>
        </Variant>
        <Variant name="width">
          <Modal title="Basic Modal" visible={true} width={1000}>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Modal>
        </Variant>
        <Variant name="ok and close text">
          <Modal
            title="Basic Modal"
            visible={true}
            okText="Confirm"
            cancelText="Close"
          >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Modal>
        </Variant>
        <Variant name="vertically centred">
          <Modal title="Vertically centered modal dialog" centered visible>
            <p>some contents...</p>
            <p>some contents...</p>
            <p>some contents...</p>
          </Modal>
        </Variant>
        <Variant name="top offset">
          <Modal title="20px to Top" style={{ top: 20 }} visible>
            <p>some contents...</p>
            <p>some contents...</p>
            <p>some contents...</p>
          </Modal>
        </Variant>
        <Variant name="custom button props">
          <Modal
            title="Basic Modal"
            visible
            okButtonProps={{ disabled: true }}
            cancelButtonProps={{ disabled: true }}
          >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Modal>
        </Variant>
      </Component>
      <Component name="Popconfirm">
        <Variant name="basic">
          <Popconfirm title="Are you sure to delete this entity?">
            <a href="#">Delete</a>
          </Popconfirm>
        </Variant>
        <Variant name="locale text">
          <Popconfirm title="Are you sure？" okText="Yes" cancelText="No">
            <a href="#">Delete</a>
          </Popconfirm>
        </Variant>
        <Variant name="placement - bottom right">
          <Popconfirm
            placement="bottomRight"
            title="Are you sure to delete this task?"
          >
            <Button>BR</Button>
          </Popconfirm>
        </Variant>
        <Variant name="custom icon">
          <Popconfirm
            title="Are you sure？"
            icon={<QuestionCircleOutlined style={{ color: "red" }} />}
          >
            <a href="#">Delete</a>
          </Popconfirm>
        </Variant>
      </Component>
      <Component name="Progress">
        <Variant name="standard">
          <Progress percent={30} />
        </Variant>
        <Variant name="status exception">
          <Progress percent={70} status="exception" />
        </Variant>
        <Variant name="completed">
          <Progress percent={100} />
        </Variant>
        <Variant name="hide info">
          <Progress percent={50} showInfo={false} />
        </Variant>
        <Variant name="small">
          <Progress percent={30} size="small" />
        </Variant>
        <Variant name="with success segment">
          <Progress percent={60} success={{ percent: 30 }} />
        </Variant>
        <Variant name="with gradient">
          <Progress
            strokeColor={{
              "0%": "#108ee9",
              "100%": "#87d068"
            }}
            percent={99.9}
          />
        </Variant>
        <Variant name="square linecaps">
          <Progress strokeLinecap="square" percent={75} />
        </Variant>
        <Variant name="circular">
          <Progress type="circle" percent={75} />
        </Variant>
        <Variant name="circular - with gradient">
          <Progress
            type="circle"
            strokeColor={{
              "0%": "#108ee9",
              "100%": "#87d068"
            }}
            percent={90}
          />
        </Variant>
        <Variant name="circular - with success segment">
          <Progress percent={60} success={{ percent: 30 }} type="circle" />
        </Variant>
        <Variant name="circular - small">
          <Progress type="circle" percent={30} width={80} />
        </Variant>
        <Variant name="circular - custom text format">
          <Progress
            type="circle"
            percent={75}
            format={percent => `${percent} Days`}
          />
        </Variant>
        <Variant name="circular - square linecaps">
          <Progress type="circle" strokeLinecap="square" percent={75} />
        </Variant>
        <Variant name="dashboard">
          <Progress type="dashboard" percent={75} />
        </Variant>
        <Variant name="dashboard - gap degree">
          <Progress type="dashboard" percent={75} gapDegree={30} />
        </Variant>
        <Variant name="dashboard - square linecaps">
          <Progress strokeLinecap="square" type="dashboard" percent={75} />
        </Variant>
        <Variant name="steps">
          <Progress percent={50} steps={3} />
        </Variant>
        <Variant name="steps - small">
          <Progress
            percent={100}
            steps={5}
            size="small"
            strokeColor="#52c41a"
          />
        </Variant>
      </Component>
      <Component name="Result">
        <Variant name="success">
          <Result
            status="success"
            title="Successfully Purchased Cloud Server ECS!"
            subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
            extra={[
              <Button type="primary" key="console">
                Go Console
              </Button>,
              <Button key="buy">Buy Again</Button>
            ]}
          />
        </Variant>
        <Variant name="info">
          <Result
            title="Your operation has been executed"
            extra={
              <Button type="primary" key="console">
                Go Console
              </Button>
            }
          />
        </Variant>
        <Variant name="warning">
          <Result
            status="warning"
            title="There are some problems with your operation."
            extra={
              <Button type="primary" key="console">
                Go Console
              </Button>
            }
          />
        </Variant>
        <Variant name="not authorized">
          <Result
            status="403"
            title="403"
            subTitle="Sorry, you are not authorized to access this page."
            extra={<Button type="primary">Back Home</Button>}
          />
        </Variant>
        <Variant name="page doens't exist">
          <Result
            status="404"
            title="404"
            subTitle="Sorry, the page you visited does not exist."
            extra={<Button type="primary">Back Home</Button>}
          />
        </Variant>
        <Variant name="something went wrong on server">
          <Result
            status="500"
            title="500"
            subTitle="Sorry, something went wrong."
            extra={<Button type="primary">Back Home</Button>}
          />
        </Variant>
        <Variant name="complex error feedback">
          <Result
            status="error"
            title="Submission Failed"
            subTitle="Please check and modify the following information before resubmitting."
            extra={[
              <Button type="primary" key="console">
                Go Console
              </Button>,
              <Button key="buy">Buy Again</Button>
            ]}
          >
            <div>
              <Paragraph>
                <Text
                  strong
                  style={{
                    fontSize: 16
                  }}
                >
                  The content you submitted has the following error:
                </Text>
              </Paragraph>
              <Paragraph>
                <CloseCircleOutlined style={{ color: "red" }} /> Your account
                has been frozen. <a>Thaw immediately &gt;</a>
              </Paragraph>
              <Paragraph>
                <CloseCircleOutlined style={{ color: "red" }} /> Your account is
                not yet eligible to apply. <a>Apply Unlock &gt;</a>
              </Paragraph>
            </div>
          </Result>
        </Variant>
        <Variant name="custom icon">
          <Result
            icon={<SmileOutlined />}
            title="Great, we have done all the operations!"
            extra={<Button type="primary">Next</Button>}
          />
        </Variant>
      </Component>
      <Component name="Skeleton">
        <Variant name="basic">
          <Skeleton />
        </Variant>
        <Variant name="with avatar and multiple paragraphs">
          <Skeleton avatar paragraph={{ rows: 4 }} />
        </Variant>
        <Variant name="active animation">
          <Skeleton active />
        </Variant>
        <Variant name="contains sub component">
          <Skeleton loading={false}>
            <div>
              <h4>Ant Design, a design language</h4>
              <p>
                We supply a series of design principles, practical patterns and
                high quality design resources (Sketch and Axure), to help people
                create their product prototypes beautifully and efficiently.
              </p>
            </div>
          </Skeleton>
        </Variant>
        <Variant name="avatar">
          <Skeleton.Avatar />
        </Variant>
        <Variant name="avatar - square shape">
          <Skeleton.Avatar shape="square" />
        </Variant>
        <Variant name="avatar - small size">
          <Skeleton.Avatar size="small" />
        </Variant>
        <Variant name="button">
          <Skeleton.Button />
        </Variant>
        <Variant name="button - circle shape">
          <Skeleton.Button shape="circle" />
        </Variant>
        <Variant name="button - round shape">
          <Skeleton.Button shape="round" />
        </Variant>
        <Variant name="button - block">
          <Skeleton.Button block />
        </Variant>
        <Variant name="button - large size">
          <Skeleton.Button size="large" />
        </Variant>
        <Variant name="input">
          <Skeleton.Input style={{ width: 200 }} />
        </Variant>
        <Variant name="input - large size">
          <Skeleton.Input style={{ width: 200 }} size="large" />
        </Variant>
        <Variant name="image">
          <Skeleton.Image />
        </Variant>
      </Component>
      <Component name="Spin">
        <Variant name="basic">
          <Spin />
        </Variant>
        <Variant name="tip">
          <Spin tip="Loading..." />
        </Variant>
        <Variant name="custom spinning indicator">
          <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />
        </Variant>
        <Variant name="small size">
          <Spin size="small" />
        </Variant>
        <Variant name="large size">
          <Spin size="large" />
        </Variant>
      </Component>
    </Category>
    <Category name="icons">
      <Component name="Outlined">
        <Variant name="StepBackwardOutlined">
          <StepBackwardOutlined />
        </Variant>
        <Variant name="StepForwardOutlined">
          <StepForwardOutlined />
        </Variant>
        <Variant name="FastBackwardOutlined">
          <FastBackwardOutlined />
        </Variant>
        <Variant name="FastForwardOutlined">
          <FastForwardOutlined />
        </Variant>
        <Variant name="ShrinkOutlined">
          <ShrinkOutlined />
        </Variant>
        <Variant name="ArrowsAltOutlined">
          <ArrowsAltOutlined />
        </Variant>
        <Variant name="DownOutlined">
          <DownOutlined />
        </Variant>
        <Variant name="UpOutlined">
          <UpOutlined />
        </Variant>
        <Variant name="LeftOutlined">
          <LeftOutlined />
        </Variant>
        <Variant name="RightOutlined">
          <RightOutlined />
        </Variant>
        <Variant name="CaretUpOutlined">
          <CaretUpOutlined />
        </Variant>
        <Variant name="CaretDownOutlined">
          <CaretDownOutlined />
        </Variant>
        <Variant name="CaretLeftOutlined">
          <CaretLeftOutlined />
        </Variant>
        <Variant name="CaretRightOutlined">
          <CaretRightOutlined />
        </Variant>
        <Variant name="UpCircleOutlined">
          <UpCircleOutlined />
        </Variant>
        <Variant name="DownCircleOutlined">
          <DownCircleOutlined />
        </Variant>
        <Variant name="LeftCircleOutlined">
          <LeftCircleOutlined />
        </Variant>
        <Variant name="RightCircleOutlined">
          <RightCircleOutlined />
        </Variant>
        <Variant name="DoubleRightOutlined">
          <DoubleRightOutlined />
        </Variant>
        <Variant name="DoubleLeftOutlined">
          <DoubleLeftOutlined />
        </Variant>
        <Variant name="VerticalLeftOutlined">
          <VerticalLeftOutlined />
        </Variant>
        <Variant name="VerticalRightOutlined">
          <VerticalRightOutlined />
        </Variant>
        <Variant name="VerticalAlignTopOutlined">
          <VerticalAlignTopOutlined />
        </Variant>
        <Variant name="VerticalAlignMiddleOutlined">
          <VerticalAlignMiddleOutlined />
        </Variant>
        <Variant name="VerticalAlignBottomOutlined">
          <VerticalAlignBottomOutlined />
        </Variant>
        <Variant name="ForwardOutlined">
          <ForwardOutlined />
        </Variant>
        <Variant name="BackwardOutlined">
          <BackwardOutlined />
        </Variant>
        <Variant name="RollbackOutlined">
          <RollbackOutlined />
        </Variant>
        <Variant name="EnterOutlined">
          <EnterOutlined />
        </Variant>
        <Variant name="RetweetOutlined">
          <RetweetOutlined />
        </Variant>
        <Variant name="SwapOutlined">
          <SwapOutlined />
        </Variant>
        <Variant name="SwapLeftOutlined">
          <SwapLeftOutlined />
        </Variant>
        <Variant name="SwapRightOutlined">
          <SwapRightOutlined />
        </Variant>
        <Variant name="ArrowUpOutlined">
          <ArrowUpOutlined />
        </Variant>
        <Variant name="ArrowDownOutlined">
          <ArrowDownOutlined />
        </Variant>
        <Variant name="ArrowLeftOutlined">
          <ArrowLeftOutlined />
        </Variant>
        <Variant name="ArrowRightOutlined">
          <ArrowRightOutlined />
        </Variant>
        <Variant name="PlayCircleOutlined">
          <PlayCircleOutlined />
        </Variant>
        <Variant name="UpSquareOutlined">
          <UpSquareOutlined />
        </Variant>
        <Variant name="DownSquareOutlined">
          <DownSquareOutlined />
        </Variant>
        <Variant name="LeftSquareOutlined">
          <LeftSquareOutlined />
        </Variant>
        <Variant name="RightSquareOutlined">
          <RightSquareOutlined />
        </Variant>
        <Variant name="LoginOutlined">
          <LoginOutlined />
        </Variant>
        <Variant name="LogoutOutlined">
          <LogoutOutlined />
        </Variant>
        <Variant name="MenuFoldOutlined">
          <MenuFoldOutlined />
        </Variant>
        <Variant name="MenuUnfoldOutlined">
          <MenuUnfoldOutlined />
        </Variant>
        <Variant name="BorderBottomOutlined">
          <BorderBottomOutlined />
        </Variant>
        <Variant name="BorderHorizontalOutlined">
          <BorderHorizontalOutlined />
        </Variant>
        <Variant name="BorderInnerOutlined">
          <BorderInnerOutlined />
        </Variant>
        <Variant name="BorderOuterOutlined">
          <BorderOuterOutlined />
        </Variant>
        <Variant name="BorderLeftOutlined">
          <BorderLeftOutlined />
        </Variant>
        <Variant name="BorderRightOutlined">
          <BorderRightOutlined />
        </Variant>
        <Variant name="BorderTopOutlined">
          <BorderTopOutlined />
        </Variant>
        <Variant name="BorderVerticleOutlined">
          <BorderVerticleOutlined />
        </Variant>
        <Variant name="PicCenterOutlined">
          <PicCenterOutlined />
        </Variant>
        <Variant name="PicLeftOutlined">
          <PicLeftOutlined />
        </Variant>
        <Variant name="PicRightOutlined">
          <PicRightOutlined />
        </Variant>
        <Variant name="RadiusBottomleftOutlined">
          <RadiusBottomleftOutlined />
        </Variant>
        <Variant name="RadiusBottomrightOutlined">
          <RadiusBottomrightOutlined />
        </Variant>
        <Variant name="RadiusUpleftOutlined">
          <RadiusUpleftOutlined />
        </Variant>
        <Variant name="RadiusUprightOutlined">
          <RadiusUprightOutlined />
        </Variant>
        <Variant name="FullscreenOutlined">
          <FullscreenOutlined />
        </Variant>
        <Variant name="FullscreenExitOutlined">
          <FullscreenExitOutlined />
        </Variant>
        <Variant name="QuestionOutlined">
          <QuestionOutlined />
        </Variant>
        <Variant name="QuestionCircleOutlined">
          <QuestionCircleOutlined />
        </Variant>
        <Variant name="PlusOutlined">
          <PlusOutlined />
        </Variant>
        <Variant name="PlusCircleOutlined">
          <PlusCircleOutlined />
        </Variant>
        <Variant name="PauseOutlined">
          <PauseOutlined />
        </Variant>
        <Variant name="PauseCircleOutlined">
          <PauseCircleOutlined />
        </Variant>
        <Variant name="MinusOutlined">
          <MinusOutlined />
        </Variant>
        <Variant name="MinusCircleOutlined">
          <MinusCircleOutlined />
        </Variant>
        <Variant name="PlusSquareOutlined">
          <PlusSquareOutlined />
        </Variant>
        <Variant name="MinusSquareOutlined">
          <MinusSquareOutlined />
        </Variant>
        <Variant name="InfoOutlined">
          <InfoOutlined />
        </Variant>
        <Variant name="InfoCircleOutlined">
          <InfoCircleOutlined />
        </Variant>
        <Variant name="ExclamationOutlined">
          <ExclamationOutlined />
        </Variant>
        <Variant name="ExclamationCircleOutlined">
          <ExclamationCircleOutlined />
        </Variant>
        <Variant name="CloseOutlined">
          <CloseOutlined />
        </Variant>
        <Variant name="CloseCircleOutlined">
          <CloseCircleOutlined />
        </Variant>
        <Variant name="CloseSquareOutlined">
          <CloseSquareOutlined />
        </Variant>
        <Variant name="CheckOutlined">
          <CheckOutlined />
        </Variant>
        <Variant name="CheckCircleOutlined">
          <CheckCircleOutlined />
        </Variant>
        <Variant name="CheckSquareOutlined">
          <CheckSquareOutlined />
        </Variant>
        <Variant name="ClockCircleOutlined">
          <ClockCircleOutlined />
        </Variant>
        <Variant name="WarningOutlined">
          <WarningOutlined />
        </Variant>
        <Variant name="IssuesCloseOutlined">
          <IssuesCloseOutlined />
        </Variant>
        <Variant name="StopOutlined">
          <StopOutlined />
        </Variant>
        <Variant name="EditOutlined">
          <EditOutlined />
        </Variant>
        <Variant name="FormOutlined">
          <FormOutlined />
        </Variant>
        <Variant name="CopyOutlined">
          <CopyOutlined />
        </Variant>
        <Variant name="ScissorOutlined">
          <ScissorOutlined />
        </Variant>
        <Variant name="DeleteOutlined">
          <DeleteOutlined />
        </Variant>
        <Variant name="SnippetsOutlined">
          <SnippetsOutlined />
        </Variant>
        <Variant name="DiffOutlined">
          <DiffOutlined />
        </Variant>
        <Variant name="HighlightOutlined">
          <HighlightOutlined />
        </Variant>
        <Variant name="AlignCenterOutlined">
          <AlignCenterOutlined />
        </Variant>
        <Variant name="AlignLeftOutlined">
          <AlignLeftOutlined />
        </Variant>
        <Variant name="AlignRightOutlined">
          <AlignRightOutlined />
        </Variant>
        <Variant name="BgColorsOutlined">
          <BgColorsOutlined />
        </Variant>
        <Variant name="BoldOutlined">
          <BoldOutlined />
        </Variant>
        <Variant name="ItalicOutlined">
          <ItalicOutlined />
        </Variant>
        <Variant name="UnderlineOutlined">
          <UnderlineOutlined />
        </Variant>
        <Variant name="StrikethroughOutlined">
          <StrikethroughOutlined />
        </Variant>
        <Variant name="RedoOutlined">
          <RedoOutlined />
        </Variant>
        <Variant name="UndoOutlined">
          <UndoOutlined />
        </Variant>
        <Variant name="ZoomInOutlined">
          <ZoomInOutlined />
        </Variant>
        <Variant name="ZoomOutOutlined">
          <ZoomOutOutlined />
        </Variant>
        <Variant name="FontColorsOutlined">
          <FontColorsOutlined />
        </Variant>
        <Variant name="FontColorsOutlined">
          <FontSizeOutlined />
        </Variant>
        <Variant name="LineHeightOutlined">
          <LineHeightOutlined />
        </Variant>
        <Variant name="DashOutlined">
          <DashOutlined />
        </Variant>
        <Variant name="SmallDashOutlined">
          <SmallDashOutlined />
        </Variant>
        <Variant name="SortAscendingOutlined">
          <SortAscendingOutlined />
        </Variant>
        <Variant name="SortDescendingOutlined">
          <SortDescendingOutlined />
        </Variant>
        <Variant name="DragOutlined">
          <DragOutlined />
        </Variant>
        <Variant name="OrderedListOutlined">
          <OrderedListOutlined />
        </Variant>
        <Variant name="UnorderedListOutlined">
          <UnorderedListOutlined />
        </Variant>
        <Variant name="RadiusSettingOutlined">
          <RadiusSettingOutlined />
        </Variant>
        <Variant name="ColumnWidthOutlined">
          <ColumnWidthOutlined />
        </Variant>
        <Variant name="ColumnHeightOutlined">
          <ColumnHeightOutlined />
        </Variant>
        <Variant name="AreaChartOutlined">
          <AreaChartOutlined />
        </Variant>
        <Variant name="PieChartOutlined">
          <PieChartOutlined />
        </Variant>
        <Variant name="BarChartOutlined">
          <BarChartOutlined />
        </Variant>
        <Variant name="DotChartOutlined">
          <DotChartOutlined />
        </Variant>
        <Variant name="LineChartOutlined">
          <LineChartOutlined />
        </Variant>
        <Variant name="RadarChartOutlined">
          <RadarChartOutlined />
        </Variant>
        <Variant name="HeatMapOutlined">
          <HeatMapOutlined />
        </Variant>
        <Variant name="FallOutlined">
          <FallOutlined />
        </Variant>
        <Variant name="RiseOutlined">
          <RiseOutlined />
        </Variant>
        <Variant name="StockOutlined">
          <StockOutlined />
        </Variant>
        <Variant name="BoxPlotOutlined">
          <BoxPlotOutlined />
        </Variant>
        <Variant name="FundOutlined">
          <FundOutlined />
        </Variant>
        <Variant name="SlidersOutlined">
          <SlidersOutlined />
        </Variant>
        <Variant name="AndroidOutlined">
          <AndroidOutlined />
        </Variant>
        <Variant name="AppleOutlined">
          <AppleOutlined />
        </Variant>
        <Variant name="WindowsOutlined">
          <WindowsOutlined />
        </Variant>
        <Variant name="IeOutlined">
          <IeOutlined />
        </Variant>
        <Variant name="ChromeOutlined">
          <ChromeOutlined />
        </Variant>
        <Variant name="GithubOutlined">
          <GithubOutlined />
        </Variant>
        <Variant name="AliwangwangOutlined">
          <AliwangwangOutlined />
        </Variant>
        <Variant name="DingdingOutlined">
          <DingdingOutlined />
        </Variant>
        <Variant name="WeiboSquareOutlined">
          <WeiboSquareOutlined />
        </Variant>
        <Variant name="WeiboCircleOutlined">
          <WeiboCircleOutlined />
        </Variant>
        <Variant name="TaobaoCircleOutlined">
          <TaobaoCircleOutlined />
        </Variant>
        <Variant name="Html5Outlined">
          <Html5Outlined />
        </Variant>
        <Variant name="WeiboOutlined">
          <WeiboOutlined />
        </Variant>
        <Variant name="TwitterOutlined">
          <TwitterOutlined />
        </Variant>
        <Variant name="WechatOutlined">
          <WechatOutlined />
        </Variant>
        <Variant name="YoutubeOutlined">
          <YoutubeOutlined />
        </Variant>
        <Variant name="AlipayCircleOutlined">
          <AlipayCircleOutlined />
        </Variant>
        <Variant name="AlipayCircleOutlined">
          <TaobaoOutlined />
        </Variant>
        <Variant name="SkypeOutlined">
          <SkypeOutlined />
        </Variant>
        <Variant name="QqOutlined">
          <QqOutlined />
        </Variant>
        <Variant name="MediumWorkmarkOutlined">
          <MediumWorkmarkOutlined />
        </Variant>
        <Variant name="GitlabOutlined">
          <GitlabOutlined />
        </Variant>
        <Variant name="MediumOutlined">
          <MediumOutlined />
        </Variant>
        <Variant name="LinkedinOutlined">
          <LinkedinOutlined />
        </Variant>
        <Variant name="GooglePlusOutlined">
          <GooglePlusOutlined />
        </Variant>
        <Variant name="DropboxOutlined">
          <DropboxOutlined />
        </Variant>
        <Variant name="FacebookOutlined">
          <FacebookOutlined />
        </Variant>
        <Variant name="CodepenOutlined">
          <CodepenOutlined />
        </Variant>
        <Variant name="CodeSandboxOutlined">
          <CodeSandboxOutlined />
        </Variant>
        <Variant name="AmazonOutlined">
          <AmazonOutlined />
        </Variant>
        <Variant name="GoogleOutlined">
          <GoogleOutlined />
        </Variant>
        <Variant name="CodepenCircleOutlined">
          <CodepenCircleOutlined />
        </Variant>
        <Variant name="AlipayOutlined">
          <AlipayOutlined />
        </Variant>
        <Variant name="AntDesignOutlined">
          <AntDesignOutlined />
        </Variant>
        <Variant name="AntCloudOutlined">
          <AntCloudOutlined />
        </Variant>
        <Variant name="AliyunOutlined">
          <AliyunOutlined />
        </Variant>
        <Variant name="ZhihuOutlined">
          <ZhihuOutlined />
        </Variant>
        <Variant name="SlackOutlined">
          <SlackOutlined />
        </Variant>
        <Variant name="SlackSquareOutlined">
          <SlackSquareOutlined />
        </Variant>
        <Variant name="BehanceOutlined">
          <BehanceOutlined />
        </Variant>
        <Variant name="BehanceSquareOutlined">
          <BehanceSquareOutlined />
        </Variant>
        <Variant name="DribbbleOutlined">
          <DribbbleOutlined />
        </Variant>
        <Variant name="DribbbleSquareOutlined">
          <DribbbleSquareOutlined />
        </Variant>
        <Variant name="InstagramOutlined">
          <InstagramOutlined />
        </Variant>
        <Variant name="YuqueOutlined">
          <YuqueOutlined />
        </Variant>
        <Variant name="AlibabaOutlined">
          <AlibabaOutlined />
        </Variant>
        <Variant name="YahooOutlined">
          <YahooOutlined />
        </Variant>
        <Variant name="RedditOutlined">
          <RedditOutlined />
        </Variant>
        <Variant name="SketchOutlined">
          <SketchOutlined />
        </Variant>
        <Variant name="AccountBookOutlined">
          <AccountBookOutlined />
        </Variant>
        <Variant name="AimOutlined">
          <AimOutlined />
        </Variant>
        <Variant name="AlertOutlined">
          <AlertOutlined />
        </Variant>
        <Variant name="ApartmentOutlined">
          <ApartmentOutlined />
        </Variant>
        <Variant name="ApiOutlined">
          <ApiOutlined />
        </Variant>
        <Variant name="AppstoreAddOutlined">
          <AppstoreAddOutlined />
        </Variant>
        <Variant name="AppstoreOutlined">
          <AppstoreOutlined />
        </Variant>
        <Variant name="AudioOutlined">
          <AudioOutlined />
        </Variant>
        <Variant name="AudioMutedOutlined">
          <AudioMutedOutlined />
        </Variant>
        <Variant name="AuditOutlined">
          <AuditOutlined />
        </Variant>
        <Variant name="BankOutlined">
          <BankOutlined />
        </Variant>
        <Variant name="BarcodeOutlined">
          <BarcodeOutlined />
        </Variant>
        <Variant name="BarsOutlined">
          <BarsOutlined />
        </Variant>
        <Variant name="BellOutlined">
          <BellOutlined />
        </Variant>
        <Variant name="BellOutlined">
          <BlockOutlined />
        </Variant>
        <Variant name="BookOutlined">
          <BookOutlined />
        </Variant>
        <Variant name="BorderOutlined">
          <BorderOutlined />
        </Variant>
        <Variant name="BorderlessTableOutlined">
          <BorderlessTableOutlined />
        </Variant>
        <Variant name="BranchesOutlined">
          <BranchesOutlined />
        </Variant>
        <Variant name="BugOutlined">
          <BugOutlined />
        </Variant>
        <Variant name="BuildOutlined">
          <BuildOutlined />
        </Variant>
        <Variant name="BulbOutlined">
          <BulbOutlined />
        </Variant>
        <Variant name="CalculatorOutlined">
          <CalculatorOutlined />
        </Variant>
        <Variant name="CalendarOutlined">
          <CalendarOutlined />
        </Variant>
        <Variant name="CameraOutlined">
          <CameraOutlined />
        </Variant>
        <Variant name="CarOutlined">
          <CarOutlined />
        </Variant>
        <Variant name="CarryOutOutlined">
          <CarryOutOutlined />
        </Variant>
        <Variant name="CiCircleOutlined">
          <CiCircleOutlined />
        </Variant>
        <Variant name="CiOutlined">
          <CiOutlined />
        </Variant>
        <Variant name="ClearOutlined">
          <ClearOutlined />
        </Variant>
        <Variant name="CloudDownloadOutlined">
          <CloudDownloadOutlined />
        </Variant>
        <Variant name="CloudOutlined">
          <CloudOutlined />
        </Variant>
        <Variant name="CloudServerOutlined">
          <CloudServerOutlined />
        </Variant>
        <Variant name="CloudSyncOutlined">
          <CloudSyncOutlined />
        </Variant>
        <Variant name="CloudUploadOutlined">
          <CloudUploadOutlined />
        </Variant>
        <Variant name="CloudUploadOutlined">
          <ClusterOutlined />
        </Variant>
        <Variant name="CodeOutlined">
          <CodeOutlined />
        </Variant>
        <Variant name="CoffeeOutlined">
          <CoffeeOutlined />
        </Variant>
        <Variant name="CommentOutlined">
          <CommentOutlined />
        </Variant>
        <Variant name="CompassOutlined">
          <CompassOutlined />
        </Variant>
        <Variant name="CompressOutlined">
          <CompressOutlined />
        </Variant>
        <Variant name="ConsoleSqlOutlined">
          <ConsoleSqlOutlined />
        </Variant>
        <Variant name="ContactsOutlined">
          <ContactsOutlined />
        </Variant>
        <Variant name="ContainerOutlined">
          <ContainerOutlined />
        </Variant>
        <Variant name="ContainerOutlined">
          <ControlOutlined />
        </Variant>
        <Variant name="CopyrightOutlined">
          <CopyrightOutlined />
        </Variant>
        <Variant name="CreditCardOutlined">
          <CreditCardOutlined />
        </Variant>
        <Variant name="CrownOutlined">
          <CrownOutlined />
        </Variant>
        <Variant name="CustomerServiceOutlined">
          <CustomerServiceOutlined />
        </Variant>
        <Variant name="DashboardOutlined">
          <DashboardOutlined />
        </Variant>
        <Variant name="DatabaseOutlined">
          <DatabaseOutlined />
        </Variant>
        <Variant name="DeleteColumnOutlined">
          <DeleteColumnOutlined />
        </Variant>
        <Variant name="DeleteRowOutlined">
          <DeleteRowOutlined />
        </Variant>
        <Variant name="DeliveredProcedureOutlined">
          <DeliveredProcedureOutlined />
        </Variant>
        <Variant name="DeploymentUnitOutlined">
          <DeploymentUnitOutlined />
        </Variant>
        <Variant name="DesktopOutlined">
          <DesktopOutlined />
        </Variant>
        <Variant name="DingtalkOutlined">
          <DingtalkOutlined />
        </Variant>
        <Variant name="DisconnectOutlined">
          <DisconnectOutlined />
        </Variant>
        <Variant name="DislikeOutlined">
          <DislikeOutlined />
        </Variant>
        <Variant name="DollarCircleOutlined">
          <DollarCircleOutlined />
        </Variant>
        <Variant name="DollarOutlined">
          <DollarOutlined />
        </Variant>
        <Variant name="DownloadOutlined">
          <DownloadOutlined />
        </Variant>
        <Variant name="EllipsisOutlined">
          <EllipsisOutlined />
        </Variant>
        <Variant name="EnvironmentOutlined">
          <EnvironmentOutlined />
        </Variant>
        <Variant name="EuroCircleOutlined">
          <EuroCircleOutlined />
        </Variant>
        <Variant name="EuroOutlined">
          <EuroOutlined />
        </Variant>
        <Variant name="ExceptionOutlined">
          <ExceptionOutlined />
        </Variant>
        <Variant name="ExpandAltOutlined">
          <ExpandAltOutlined />
        </Variant>
        <Variant name="ExpandOutlined">
          <ExpandOutlined />
        </Variant>
        <Variant name="ExperimentOutlined">
          <ExperimentOutlined />
        </Variant>
        <Variant name="ExportOutlined">
          <ExportOutlined />
        </Variant>
        <Variant name="EyeOutlined">
          <EyeOutlined />
        </Variant>
        <Variant name="EyeInvisibleOutlined">
          <EyeInvisibleOutlined />
        </Variant>
        <Variant name="FieldBinaryOutlined">
          <FieldBinaryOutlined />
        </Variant>
        <Variant name="FieldNumberOutlined">
          <FieldNumberOutlined />
        </Variant>
        <Variant name="FieldStringOutlined">
          <FieldStringOutlined />
        </Variant>
        <Variant name="FieldTimeOutlined">
          <FieldTimeOutlined />
        </Variant>
        <Variant name="FileAddOutlined">
          <FileAddOutlined />
        </Variant>
        <Variant name="FileDoneOutlined">
          <FileDoneOutlined />
        </Variant>
        <Variant name="FileExcelOutlined">
          <FileExcelOutlined />
        </Variant>
        <Variant name="FileExclamationOutlined">
          <FileExclamationOutlined />
        </Variant>
        <Variant name="FileOutlined">
          <FileOutlined />
        </Variant>
        <Variant name="FileGifOutlined">
          <FileGifOutlined />
        </Variant>
        <Variant name="FileImageOutlined">
          <FileImageOutlined />
        </Variant>
        <Variant name="FileJpgOutlined">
          <FileJpgOutlined />
        </Variant>
        <Variant name="FileMarkdownOutlined">
          <FileMarkdownOutlined />
        </Variant>
        <Variant name="FilePdfOutlined">
          <FilePdfOutlined />
        </Variant>
        <Variant name="FilePptOutlined">
          <FilePptOutlined />
        </Variant>
        <Variant name="FileProtectOutlined">
          <FileProtectOutlined />
        </Variant>
        <Variant name="FileSearchOutlined">
          <FileSearchOutlined />
        </Variant>
        <Variant name="FileSyncOutlined">
          <FileSyncOutlined />
        </Variant>
        <Variant name="FileTextOutlined">
          <FileTextOutlined />
        </Variant>
        <Variant name="FileUnknownOutlined">
          <FileUnknownOutlined />
        </Variant>
        <Variant name="FileWordOutlined">
          <FileWordOutlined />
        </Variant>
        <Variant name="FileZipOutlined">
          <FileZipOutlined />
        </Variant>
        <Variant name="FilterOutlined">
          <FilterOutlined />
        </Variant>
        <Variant name="FireOutlined">
          <FireOutlined />
        </Variant>
        <Variant name="FlagOutlined">
          <FlagOutlined />
        </Variant>
        <Variant name="FolderAddOutlined">
          <FolderAddOutlined />
        </Variant>
        <Variant name="FolderAddOutlined">
          <FolderOutlined />
        </Variant>
        <Variant name="FolderOpenOutlined">
          <FolderOpenOutlined />
        </Variant>
        <Variant name="FolderViewOutlined">
          <FolderViewOutlined />
        </Variant>
        <Variant name="ForkOutlined">
          <ForkOutlined />
        </Variant>
        <Variant name="FormatPainterOutlined">
          <FormatPainterOutlined />
        </Variant>
        <Variant name="FrownOutlined">
          <FrownOutlined />
        </Variant>
        <Variant name="FunctionOutlined">
          <FunctionOutlined />
        </Variant>
        <Variant name="FundProjectionScreenOutlined">
          <FundProjectionScreenOutlined />
        </Variant>
        <Variant name="FundViewOutlined">
          <FundViewOutlined />
        </Variant>
        <Variant name="FunnelPlotOutlined">
          <FunnelPlotOutlined />
        </Variant>
        <Variant name="GatewayOutlined">
          <GatewayOutlined />
        </Variant>
        <Variant name="GifOutlined">
          <GifOutlined />
        </Variant>
        <Variant name="GiftOutlined">
          <GiftOutlined />
        </Variant>
        <Variant name="GlobalOutlined">
          <GlobalOutlined />
        </Variant>
        <Variant name="GoldOutlined">
          <GoldOutlined />
        </Variant>
        <Variant name="GroupOutlined">
          <GroupOutlined />
        </Variant>
        <Variant name="HddOutlined">
          <HddOutlined />
        </Variant>
        <Variant name="HeartOutlined">
          <HeartOutlined />
        </Variant>
        <Variant name="HistoryOutlined">
          <HistoryOutlined />
        </Variant>
        <Variant name="HolderOutlined">
          <HolderOutlined />
        </Variant>
        <Variant name="HomeOutlined">
          <HomeOutlined />
        </Variant>
        <Variant name="HourglassOutlined">
          <HourglassOutlined />
        </Variant>
        <Variant name="IdcardOutlined">
          <IdcardOutlined />
        </Variant>
        <Variant name="ImportOutlined">
          <ImportOutlined />
        </Variant>
        <Variant name="InboxOutlined">
          <InboxOutlined />
        </Variant>
        <Variant name="InsertRowAboveOutlined">
          <InsertRowAboveOutlined />
        </Variant>
        <Variant name="InsertRowBelowOutlined">
          <InsertRowBelowOutlined />
        </Variant>
        <Variant name="InsertRowLeftOutlined">
          <InsertRowLeftOutlined />
        </Variant>
        <Variant name="InsertRowRightOutlined">
          <InsertRowRightOutlined />
        </Variant>
        <Variant name="InsuranceOutlined">
          <InsuranceOutlined />
        </Variant>
        <Variant name="InteractionOutlined">
          <InteractionOutlined />
        </Variant>
        <Variant name="KeyOutlined">
          <KeyOutlined />
        </Variant>
        <Variant name="LaptopOutlined">
          <LaptopOutlined />
        </Variant>
        <Variant name="LayoutOutlined">
          <LayoutOutlined />
        </Variant>
        <Variant name="LikeOutlined">
          <LikeOutlined />
        </Variant>
        <Variant name="LineOutlined">
          <LineOutlined />
        </Variant>
        <Variant name="LinkOutlined">
          <LinkOutlined />
        </Variant>
        <Variant name="Loading3QuartersOutlined">
          <Loading3QuartersOutlined />
        </Variant>
        <Variant name="LoadingOutlined">
          <LoadingOutlined />
        </Variant>
        <Variant name="LockOutlined">
          <LockOutlined />
        </Variant>
        <Variant name="MacCommandOutlined">
          <MacCommandOutlined />
        </Variant>
        <Variant name="MailOutlined">
          <MailOutlined />
        </Variant>
        <Variant name="ManOutlined">
          <ManOutlined />
        </Variant>
        <Variant name="MedicineBoxOutlined">
          <MedicineBoxOutlined />
        </Variant>
        <Variant name="MehOutlined">
          <MehOutlined />
        </Variant>
        <Variant name="MenuOutlined">
          <MenuOutlined />
        </Variant>
        <Variant name="MergeCellsOutlined">
          <MergeCellsOutlined />
        </Variant>
        <Variant name="MessageOutlined">
          <MessageOutlined />
        </Variant>
        <Variant name="MobileOutlined">
          <MobileOutlined />
        </Variant>
        <Variant name="MoneyCollectOutlined">
          <MoneyCollectOutlined />
        </Variant>
        <Variant name="MonitorOutlined">
          <MonitorOutlined />
        </Variant>
        <Variant name="MoreOutlined">
          <MoreOutlined />
        </Variant>
        <Variant name="NodeCollapseOutlined">
          <NodeCollapseOutlined />
        </Variant>
        <Variant name="NodeExpandOutlined">
          <NodeExpandOutlined />
        </Variant>
        <Variant name="NodeIndexOutlined">
          <NodeIndexOutlined />
        </Variant>
        <Variant name="NotificationOutlined">
          <NotificationOutlined />
        </Variant>
        <Variant name="NumberOutlined">
          <NumberOutlined />
        </Variant>
        <Variant name="OneToOneOutlined">
          <OneToOneOutlined />
        </Variant>
        <Variant name="PartitionOutlined">
          <PartitionOutlined />
        </Variant>
        <Variant name="PaperClipOutlined">
          <PaperClipOutlined />
        </Variant>
        <Variant name="PayCircleOutlined">
          <PayCircleOutlined />
        </Variant>
        <Variant name="PercentageOutlined">
          <PercentageOutlined />
        </Variant>
        <Variant name="PhoneOutlined">
          <PhoneOutlined />
        </Variant>
        <Variant name="PictureOutlined">
          <PictureOutlined />
        </Variant>
        <Variant name="PlaySquareOutlined">
          <PlaySquareOutlined />
        </Variant>
        <Variant name="PoundCircleOutlined">
          <PoundCircleOutlined />
        </Variant>
        <Variant name="PoweroffOutlined">
          <PoweroffOutlined />
        </Variant>
        <Variant name="PrinterOutlined">
          <PrinterOutlined />
        </Variant>
        <Variant name="ProfileOutlined">
          <ProfileOutlined />
        </Variant>
        <Variant name="ProjectOutlined">
          <ProjectOutlined />
        </Variant>
        <Variant name="PropertySafetyOutlined">
          <PropertySafetyOutlined />
        </Variant>
        <Variant name="PullRequestOutlined">
          <PullRequestOutlined />
        </Variant>
        <Variant name="PushpinOutlined">
          <PushpinOutlined />
        </Variant>
        <Variant name="QrcodeOutlined">
          <QrcodeOutlined />
        </Variant>
        <Variant name="ReadOutlined">
          <ReadOutlined />
        </Variant>
        <Variant name="ReconciliationOutlined">
          <ReconciliationOutlined />
        </Variant>
        <Variant name="RedEnvelopeOutlined">
          <RedEnvelopeOutlined />
        </Variant>
        <Variant name="ReloadOutlined">
          <ReloadOutlined />
        </Variant>
        <Variant name="RestOutlined">
          <RestOutlined />
        </Variant>
        <Variant name="RobotOutlined">
          <RobotOutlined />
        </Variant>
        <Variant name="RocketOutlined">
          <RocketOutlined />
        </Variant>
        <Variant name="RotateLeftOutlined">
          <RotateLeftOutlined />
        </Variant>
        <Variant name="RotateRightOutlined">
          <RotateRightOutlined />
        </Variant>
        <Variant name="SafetyCertificateOutlined">
          <SafetyCertificateOutlined />
        </Variant>
        <Variant name="SafetyOutlined">
          <SafetyOutlined />
        </Variant>
        <Variant name="SaveOutlined">
          <SaveOutlined />
        </Variant>
        <Variant name="ScanOutlined">
          <ScanOutlined />
        </Variant>
        <Variant name="ScheduleOutlined">
          <ScheduleOutlined />
        </Variant>
        <Variant name="SearchOutlined">
          <SearchOutlined />
        </Variant>
        <Variant name="SecurityScanOutlined">
          <SecurityScanOutlined />
        </Variant>
        <Variant name="SelectOutlined">
          <SelectOutlined />
        </Variant>
        <Variant name="SendOutlined">
          <SendOutlined />
        </Variant>
        <Variant name="SettingOutlined">
          <SettingOutlined />
        </Variant>
        <Variant name="ShakeOutlined">
          <ShakeOutlined />
        </Variant>
        <Variant name="ShareAltOutlined">
          <ShareAltOutlined />
        </Variant>
        <Variant name="ShopOutlined">
          <ShopOutlined />
        </Variant>
        <Variant name="ShoppingCartOutlined">
          <ShoppingCartOutlined />
        </Variant>
        <Variant name="ShoppingOutlined">
          <ShoppingOutlined />
        </Variant>
        <Variant name="SisternodeOutlined">
          <SisternodeOutlined />
        </Variant>
        <Variant name="SkinOutlined">
          <SkinOutlined />
        </Variant>
        <Variant name="SmileOutlined">
          <SmileOutlined />
        </Variant>
        <Variant name="SolutionOutlined">
          <SolutionOutlined />
        </Variant>
        <Variant name="SoundOutlined">
          <SoundOutlined />
        </Variant>
        <Variant name="SplitCellsOutlined">
          <SplitCellsOutlined />
        </Variant>
        <Variant name="StarOutlined">
          <StarOutlined />
        </Variant>
        <Variant name="SubnodeOutlined">
          <SubnodeOutlined />
        </Variant>
        <Variant name="SwitcherOutlined">
          <SwitcherOutlined />
        </Variant>
        <Variant name="SyncOutlined">
          <SyncOutlined />
        </Variant>
        <Variant name="TableOutlined">
          <TableOutlined />
        </Variant>
        <Variant name="TableOutlined">
          <TabletOutlined />
        </Variant>
        <Variant name="TagOutlined">
          <TagOutlined />
        </Variant>
        <Variant name="TagsOutlined">
          <TagsOutlined />
        </Variant>
        <Variant name="TeamOutlined">
          <TeamOutlined />
        </Variant>
        <Variant name="ThunderboltOutlined">
          <ThunderboltOutlined />
        </Variant>
        <Variant name="ToTopOutlined">
          <ToTopOutlined />
        </Variant>
        <Variant name="ToolOutlined">
          <ToolOutlined />
        </Variant>
        <Variant name="TrademarkCircleOutlined">
          <TrademarkCircleOutlined />
        </Variant>
        <Variant name="TrademarkOutlined">
          <TrademarkOutlined />
        </Variant>
        <Variant name="TransactionOutlined">
          <TransactionOutlined />
        </Variant>
        <Variant name="TranslationOutlined">
          <TranslationOutlined />
        </Variant>
        <Variant name="TranslationOutlined">
          <TrophyOutlined />
        </Variant>
        <Variant name="UngroupOutlined">
          <UngroupOutlined />
        </Variant>
        <Variant name="UnlockOutlined">
          <UnlockOutlined />
        </Variant>
        <Variant name="UploadOutlined">
          <UploadOutlined />
        </Variant>
        <Variant name="UsbOutlined">
          <UsbOutlined />
        </Variant>
        <Variant name="UserAddOutlined">
          <UserAddOutlined />
        </Variant>
        <Variant name="UserDeleteOutlined">
          <UserDeleteOutlined />
        </Variant>
        <Variant name="UserOutlined">
          <UserOutlined />
        </Variant>
        <Variant name="UserSwitchOutlined">
          <UserSwitchOutlined />
        </Variant>
        <Variant name="UsergroupAddOutlined">
          <UsergroupAddOutlined />
        </Variant>
        <Variant name="UsergroupDeleteOutlined">
          <UsergroupDeleteOutlined />
        </Variant>
        <Variant name="VerifiedOutlined">
          <VerifiedOutlined />
        </Variant>
        <Variant name="VideoCameraAddOutlined">
          <VideoCameraAddOutlined />
        </Variant>
        <Variant name="VideoCameraOutlined">
          <VideoCameraOutlined />
        </Variant>
        <Variant name="WalletOutlined">
          <WalletOutlined />
        </Variant>
        <Variant name="WhatsAppOutlined">
          <WhatsAppOutlined />
        </Variant>
        <Variant name="WifiOutlined">
          <WifiOutlined />
        </Variant>
        <Variant name="WomanOutlined">
          <WomanOutlined />
        </Variant>
      </Component>
      <Component name="Filled">
        <Variant name="StepBackwardFilled">
          <StepBackwardFilled />
        </Variant>
        <Variant name="StepForwardFilled">
          <StepForwardFilled />
        </Variant>
        <Variant name="FastBackwardFilled">
          <FastBackwardFilled />
        </Variant>
        <Variant name="FastForwardFilled">
          <FastForwardFilled />
        </Variant>
        <Variant name="CaretUpFilled">
          <CaretUpFilled />
        </Variant>
        <Variant name="CaretDownFilled">
          <CaretDownFilled />
        </Variant>
        <Variant name="CaretLeftFilled">
          <CaretLeftFilled />
        </Variant>
        <Variant name="CaretRightFilled">
          <CaretRightFilled />
        </Variant>
        <Variant name="UpCircleFilled">
          <UpCircleFilled />
        </Variant>
        <Variant name="DownCircleFilled">
          <DownCircleFilled />
        </Variant>
        <Variant name="LeftCircleFilled">
          <LeftCircleFilled />
        </Variant>
        <Variant name="RightCircleFilled">
          <RightCircleFilled />
        </Variant>
        <Variant name="ForwardFilled">
          <ForwardFilled />
        </Variant>
        <Variant name="BackwardFilled">
          <BackwardFilled />
        </Variant>
        <Variant name="PlayCircleFilled">
          <PlayCircleFilled />
        </Variant>
        <Variant name="UpSquareFilled">
          <UpSquareFilled />
        </Variant>
        <Variant name="DownSquareFilled">
          <DownSquareFilled />
        </Variant>
        <Variant name="LeftSquareFilled">
          <LeftSquareFilled />
        </Variant>
        <Variant name="RightSquareFilled">
          <RightSquareFilled />
        </Variant>
        <Variant name="QuestionCircleFilled">
          <QuestionCircleFilled />
        </Variant>
        <Variant name="PlusCircleFilled">
          <PlusCircleFilled />
        </Variant>
        <Variant name="PauseCircleFilled">
          <PauseCircleFilled />
        </Variant>
        <Variant name="MinusCircleFilled">
          <MinusCircleFilled />
        </Variant>
        <Variant name="PlusSquareFilled">
          <PlusSquareFilled />
        </Variant>
        <Variant name="MinusSquareFilled">
          <MinusSquareFilled />
        </Variant>
        <Variant name="InfoCircleFilled">
          <InfoCircleFilled />
        </Variant>
        <Variant name="ExclamationCircleFilled">
          <ExclamationCircleFilled />
        </Variant>
        <Variant name="CloseCircleFilled">
          <CloseCircleFilled />
        </Variant>
        <Variant name="CloseSquareFilled">
          <CloseSquareFilled />
        </Variant>
        <Variant name="CheckCircleFilled">
          <CheckCircleFilled />
        </Variant>
        <Variant name="CheckSquareFilled">
          <CheckSquareFilled />
        </Variant>
        <Variant name="ClockCircleFilled">
          <ClockCircleFilled />
        </Variant>
        <Variant name="WarningFilled">
          <WarningFilled />
        </Variant>
        <Variant name="StopFilled">
          <StopFilled />
        </Variant>
        <Variant name="EditFilled">
          <EditFilled />
        </Variant>
        <Variant name="CopyFilled">
          <CopyFilled />
        </Variant>
        <Variant name="DeleteFilled">
          <DeleteFilled />
        </Variant>
        <Variant name="SnippetsFilled">
          <SnippetsFilled />
        </Variant>
        <Variant name="DiffFilled">
          <DiffFilled />
        </Variant>
        <Variant name="HighlightFilled">
          <HighlightFilled />
        </Variant>
        <Variant name="PieChartFilled">
          <PieChartFilled />
        </Variant>
        <Variant name="BoxPlotFilled">
          <BoxPlotFilled />
        </Variant>
        <Variant name="FundFilled">
          <FundFilled />
        </Variant>
        <Variant name="SlidersFilled">
          <SlidersFilled />
        </Variant>
        <Variant name="AndroidFilled">
          <AndroidFilled />
        </Variant>
        <Variant name="AppleFilled">
          <AppleFilled />
        </Variant>
        <Variant name="WindowsFilled">
          <WindowsFilled />
        </Variant>
        <Variant name="ChromeFilled">
          <ChromeFilled />
        </Variant>
        <Variant name="GithubFilled">
          <GithubFilled />
        </Variant>
        <Variant name="AliwangwangFilled">
          <AliwangwangFilled />
        </Variant>
        <Variant name="WeiboSquareFilled">
          <WeiboSquareFilled />
        </Variant>
        <Variant name="WeiboCircleFilled">
          <WeiboCircleFilled />
        </Variant>
        <Variant name="TaobaoCircleFilled">
          <TaobaoCircleFilled />
        </Variant>
        <Variant name="Html5Filled">
          <Html5Filled />
        </Variant>
        <Variant name="WechatFilled">
          <WechatFilled />
        </Variant>
        <Variant name="YoutubeFilled">
          <YoutubeFilled />
        </Variant>
        <Variant name="AlipayCircleFilled">
          <AlipayCircleFilled />
        </Variant>
        <Variant name="SkypeFilled">
          <SkypeFilled />
        </Variant>
        <Variant name="GitlabFilled">
          <GitlabFilled />
        </Variant>
        <Variant name="LinkedinFilled">
          <LinkedinFilled />
        </Variant>
        <Variant name="FacebookFilled">
          <FacebookFilled />
        </Variant>
        <Variant name="CodeSandboxCircleFilled">
          <CodeSandboxCircleFilled />
        </Variant>
        <Variant name="CodepenCircleFilled">
          <CodepenCircleFilled />
        </Variant>
        <Variant name="SlackSquareFilled">
          <SlackSquareFilled />
        </Variant>
        <Variant name="BehanceSquareFilled">
          <BehanceSquareFilled />
        </Variant>
        <Variant name="DribbbleSquareFilled">
          <DribbbleSquareFilled />
        </Variant>
        <Variant name="InstagramFilled">
          <InstagramFilled />
        </Variant>
        <Variant name="YuqueFilled">
          <YuqueFilled />
        </Variant>
        <Variant name="YahooFilled">
          <YahooFilled />
        </Variant>
        <Variant name="AccountBookFilled">
          <AccountBookFilled />
        </Variant>
        <Variant name="AlertFilled">
          <AlertFilled />
        </Variant>
        <Variant name="AlipaySquareFilled">
          <AlipaySquareFilled />
        </Variant>
        <Variant name="AmazonCircleFilled">
          <AmazonCircleFilled />
        </Variant>
        <Variant name="ApiFilled">
          <ApiFilled />
        </Variant>
        <Variant name="AppstoreFilled">
          <AppstoreFilled />
        </Variant>
        <Variant name="AudioFilled">
          <AudioFilled />
        </Variant>
        <Variant name="BankFilled">
          <BankFilled />
        </Variant>
        <Variant name="BehanceCircleFilled">
          <BehanceCircleFilled />
        </Variant>
        <Variant name="BellFilled">
          <BellFilled />
        </Variant>
        <Variant name="BookFilled">
          <BookFilled />
        </Variant>
        <Variant name="BugFilled">
          <BugFilled />
        </Variant>
        <Variant name="BuildFilled">
          <BuildFilled />
        </Variant>
        <Variant name="CalculatorFilled">
          <CalculatorFilled />
        </Variant>
        <Variant name="CalendarFilled">
          <CalendarFilled />
        </Variant>
        <Variant name="CameraFilled">
          <CameraFilled />
        </Variant>
        <Variant name="CarFilled">
          <CarFilled />
        </Variant>
        <Variant name="CarryOutFilled">
          <CarryOutFilled />
        </Variant>
        <Variant name="CiCircleFilled">
          <CiCircleFilled />
        </Variant>
        <Variant name="CloudFilled">
          <CloudFilled />
        </Variant>
        <Variant name="CodeFilled">
          <CodeFilled />
        </Variant>
        <Variant name="CodeSandboxSquareFilled">
          <CodeSandboxSquareFilled />
        </Variant>
        <Variant name="CodepenSquareFilled">
          <CodepenSquareFilled />
        </Variant>
        <Variant name="CompassFilled">
          <CompassFilled />
        </Variant>
        <Variant name="ContactsFilled">
          <ContactsFilled />
        </Variant>
        <Variant name="ContainerFilled">
          <ContainerFilled />
        </Variant>
        <Variant name="ContainerFilled">
          <ControlFilled />
        </Variant>
        <Variant name="CreditCardFilled">
          <CreditCardFilled />
        </Variant>
        <Variant name="CrownFilled">
          <CrownFilled />
        </Variant>
        <Variant name="CustomerServiceFilled">
          <CustomerServiceFilled />
        </Variant>
        <Variant name="DashboardFilled">
          <DashboardFilled />
        </Variant>
        <Variant name="DatabaseFilled">
          <DatabaseFilled />
        </Variant>
        <Variant name="DingtalkCircleFilled">
          <DingtalkCircleFilled />
        </Variant>
        <Variant name="DingtalkSquareFilled">
          <DingtalkSquareFilled />
        </Variant>
        <Variant name="DislikeFilled">
          <DislikeFilled />
        </Variant>
        <Variant name="DollarCircleFilled">
          <DollarCircleFilled />
        </Variant>
        <Variant name="DribbbleCircleFilled">
          <DribbbleCircleFilled />
        </Variant>
        <Variant name="DropboxCircleFilled">
          <DropboxCircleFilled />
        </Variant>
        <Variant name="DropboxSquareFilled">
          <DropboxSquareFilled />
        </Variant>
        <Variant name="EnvironmentFilled">
          <EnvironmentFilled />
        </Variant>
        <Variant name="EuroCircleFilled">
          <EuroCircleFilled />
        </Variant>
        <Variant name="ExperimentFilled">
          <ExperimentFilled />
        </Variant>
        <Variant name="EyeFilled">
          <EyeFilled />
        </Variant>
        <Variant name="EyeInvisibleFilled">
          <EyeInvisibleFilled />
        </Variant>
        <Variant name="FileAddFilled">
          <FileAddFilled />
        </Variant>
        <Variant name="FileExcelFilled">
          <FileExcelFilled />
        </Variant>
        <Variant name="FileExclamationFilled">
          <FileExclamationFilled />
        </Variant>
        <Variant name="FileFilled">
          <FileFilled />
        </Variant>
        <Variant name="FileImageFilled">
          <FileImageFilled />
        </Variant>
        <Variant name="FileMarkdownFilled">
          <FileMarkdownFilled />
        </Variant>
        <Variant name="FilePdfFilled">
          <FilePdfFilled />
        </Variant>
        <Variant name="FilePptFilled">
          <FilePptFilled />
        </Variant>
        <Variant name="FileTextFilled">
          <FileTextFilled />
        </Variant>
        <Variant name="FileUnknownFilled">
          <FileUnknownFilled />
        </Variant>
        <Variant name="FileWordFilled">
          <FileWordFilled />
        </Variant>
        <Variant name="FileZipFilled">
          <FileZipFilled />
        </Variant>
        <Variant name="FilterFilled">
          <FilterFilled />
        </Variant>
        <Variant name="FireFilled">
          <FireFilled />
        </Variant>
        <Variant name="FlagFilled">
          <FlagFilled />
        </Variant>
        <Variant name="FolderAddFilled">
          <FolderAddFilled />
        </Variant>
        <Variant name="FolderFilled">
          <FolderFilled />
        </Variant>
        <Variant name="FolderOpenFilled">
          <FolderOpenFilled />
        </Variant>
        <Variant name="FormatPainterFilled">
          <FormatPainterFilled />
        </Variant>
        <Variant name="FrownFilled">
          <FrownFilled />
        </Variant>
        <Variant name="FunnelPlotFilled">
          <FunnelPlotFilled />
        </Variant>
        <Variant name="GiftFilled">
          <GiftFilled />
        </Variant>
        <Variant name="GoldFilled">
          <GoldFilled />
        </Variant>
        <Variant name="GoldenFilled">
          <GoldenFilled />
        </Variant>
        <Variant name="GoogleCircleFilled">
          <GoogleCircleFilled />
        </Variant>
        <Variant name="GooglePlusCircleFilled">
          <GooglePlusCircleFilled />
        </Variant>
        <Variant name="GooglePlusSquareFilled">
          <GooglePlusSquareFilled />
        </Variant>
        <Variant name="GoogleSquareFilled">
          <GoogleSquareFilled />
        </Variant>
        <Variant name="HddFilled">
          <HddFilled />
        </Variant>
        <Variant name="HeartFilled">
          <HeartFilled />
        </Variant>
        <Variant name="HomeFilled">
          <HomeFilled />
        </Variant>
        <Variant name="HourglassFilled">
          <HourglassFilled />
        </Variant>
        <Variant name="IdcardFilled">
          <IdcardFilled />
        </Variant>
        <Variant name="IeCircleFilled">
          <IeCircleFilled />
        </Variant>
        <Variant name="IeSquareFilled">
          <IeSquareFilled />
        </Variant>
        <Variant name="InsuranceFilled">
          <InsuranceFilled />
        </Variant>
        <Variant name="InteractionFilled">
          <InteractionFilled />
        </Variant>
        <Variant name="LayoutFilled">
          <LayoutFilled />
        </Variant>
        <Variant name="LikeFilled">
          <LikeFilled />
        </Variant>
        <Variant name="LockFilled">
          <LockFilled />
        </Variant>
        <Variant name="MacCommandFilled">
          <MacCommandFilled />
        </Variant>
        <Variant name="MailFilled">
          <MailFilled />
        </Variant>
        <Variant name="MedicineBoxFilled">
          <MedicineBoxFilled />
        </Variant>
        <Variant name="MediumCircleFilled">
          <MediumCircleFilled />
        </Variant>
        <Variant name="MediumSquareFilled">
          <MediumSquareFilled />
        </Variant>
        <Variant name="MehFilled">
          <MehFilled />
        </Variant>
        <Variant name="MessageFilled">
          <MessageFilled />
        </Variant>
        <Variant name="MobileFilled">
          <MobileFilled />
        </Variant>
        <Variant name="MoneyCollectFilled">
          <MoneyCollectFilled />
        </Variant>
        <Variant name="NotificationFilled">
          <NotificationFilled />
        </Variant>
        <Variant name="PayCircleFilled">
          <PayCircleFilled />
        </Variant>
        <Variant name="PhoneFilled">
          <PhoneFilled />
        </Variant>
        <Variant name="PictureFilled">
          <PictureFilled />
        </Variant>
        <Variant name="PlaySquareFilled">
          <PlaySquareFilled />
        </Variant>
        <Variant name="PoundCircleFilled">
          <PoundCircleFilled />
        </Variant>
        <Variant name="PrinterFilled">
          <PrinterFilled />
        </Variant>
        <Variant name="ProfileFilled">
          <ProfileFilled />
        </Variant>
        <Variant name="ProjectFilled">
          <ProjectFilled />
        </Variant>
        <Variant name="PropertySafetyFilled">
          <PropertySafetyFilled />
        </Variant>
        <Variant name="PushpinFilled">
          <PushpinFilled />
        </Variant>
        <Variant name="QqCircleFilled">
          <QqCircleFilled />
        </Variant>
        <Variant name="QqSquareFilled">
          <QqSquareFilled />
        </Variant>
        <Variant name="ReadFilled">
          <ReadFilled />
        </Variant>
        <Variant name="ReconciliationFilled">
          <ReconciliationFilled />
        </Variant>
        <Variant name="RedEnvelopeFilled">
          <RedEnvelopeFilled />
        </Variant>
        <Variant name="RedditCircleFilled">
          <RedditCircleFilled />
        </Variant>
        <Variant name="RedditSquareFilled">
          <RedditSquareFilled />
        </Variant>
        <Variant name="RestFilled">
          <RestFilled />
        </Variant>
        <Variant name="RobotFilled">
          <RobotFilled />
        </Variant>
        <Variant name="RocketFilled">
          <RocketFilled />
        </Variant>
        <Variant name="SafetyCertificateFilled">
          <SafetyCertificateFilled />
        </Variant>
        <Variant name="SaveFilled">
          <SaveFilled />
        </Variant>
        <Variant name="ScheduleFilled">
          <ScheduleFilled />
        </Variant>
        <Variant name="SecurityScanFilled">
          <SecurityScanFilled />
        </Variant>
        <Variant name="SettingFilled">
          <SettingFilled />
        </Variant>
        <Variant name="ShopFilled">
          <ShopFilled />
        </Variant>
        <Variant name="ShoppingFilled">
          <ShoppingFilled />
        </Variant>
        <Variant name="SignalFilled">
          <SignalFilled />
        </Variant>
        <Variant name="SketchCircleFilled">
          <SketchCircleFilled />
        </Variant>
        <Variant name="SketchSquareFilled">
          <SketchSquareFilled />
        </Variant>
        <Variant name="SkinFilled">
          <SkinFilled />
        </Variant>
        <Variant name="SlackCircleFilled">
          <SlackCircleFilled />
        </Variant>
        <Variant name="SmileFilled">
          <SmileFilled />
        </Variant>
        <Variant name="SoundFilled">
          <SoundFilled />
        </Variant>
        <Variant name="StarFilled">
          <StarFilled />
        </Variant>
        <Variant name="SwitcherFilled">
          <SwitcherFilled />
        </Variant>
        <Variant name="TabletFilled">
          <TabletFilled />
        </Variant>
        <Variant name="TagFilled">
          <TagFilled />
        </Variant>
        <Variant name="TagsFilled">
          <TagsFilled />
        </Variant>
        <Variant name="TaobaoSquareFilled">
          <TaobaoSquareFilled />
        </Variant>
        <Variant name="ThunderboltFilled">
          <ThunderboltFilled />
        </Variant>
        <Variant name="ToolFilled">
          <ToolFilled />
        </Variant>
        <Variant name="TrademarkCircleFilled">
          <TrademarkCircleFilled />
        </Variant>
        <Variant name="TrophyFilled">
          <TrophyFilled />
        </Variant>
        <Variant name="TwitterCircleFilled">
          <TwitterCircleFilled />
        </Variant>
        <Variant name="TwitterSquareFilled">
          <TwitterSquareFilled />
        </Variant>
        <Variant name="UnlockFilled">
          <UnlockFilled />
        </Variant>
        <Variant name="UsbFilled">
          <UsbFilled />
        </Variant>
        <Variant name="VideoCameraFilled">
          <VideoCameraFilled />
        </Variant>
        <Variant name="WalletFilled">
          <WalletFilled />
        </Variant>
        <Variant name="ZhihuCircleFilled">
          <ZhihuCircleFilled />
        </Variant>
        <Variant name="ZhihuSquareFilled">
          <ZhihuSquareFilled />
        </Variant>
      </Component>
      <Component name="Two Tone">
        <Variant name="UpCircleTwoTone">
          <UpCircleTwoTone />
        </Variant>
        <Variant name="DownCircleTwoTone">
          <DownCircleTwoTone />
        </Variant>
        <Variant name="LeftCircleTwoTone">
          <LeftCircleTwoTone />
        </Variant>
        <Variant name="RightCircleTwoTone">
          <RightCircleTwoTone />
        </Variant>
        <Variant name="PlayCircleTwoTone">
          <PlayCircleTwoTone />
        </Variant>
        <Variant name="UpSquareTwoTone">
          <UpSquareTwoTone />
        </Variant>
        <Variant name="DownSquareTwoTone">
          <DownSquareTwoTone />
        </Variant>
        <Variant name="LeftSquareTwoTone">
          <LeftSquareTwoTone />
        </Variant>
        <Variant name="LeftSquareTwoTone">
          <RightSquareTwoTone />
        </Variant>
        <Variant name="QuestionCircleTwoTone">
          <QuestionCircleTwoTone />
        </Variant>
        <Variant name="PlusCircleTwoTone">
          <PlusCircleTwoTone />
        </Variant>
        <Variant name="PauseCircleTwoTone">
          <PauseCircleTwoTone />
        </Variant>
        <Variant name="MinusCircleTwoTone">
          <MinusCircleTwoTone />
        </Variant>
        <Variant name="PlusSquareTwoTone">
          <PlusSquareTwoTone />
        </Variant>
        <Variant name="MinusSquareTwoTone">
          <MinusSquareTwoTone />
        </Variant>
        <Variant name="InfoCircleTwoTone">
          <InfoCircleTwoTone />
        </Variant>
        <Variant name="ExclamationCircleTwoTone">
          <ExclamationCircleTwoTone />
        </Variant>
        <Variant name="CloseCircleTwoTone">
          <CloseCircleTwoTone />
        </Variant>
        <Variant name="CloseSquareTwoTone">
          <CloseSquareTwoTone />
        </Variant>
        <Variant name="CheckCircleTwoTone">
          <CheckCircleTwoTone />
        </Variant>
        <Variant name="CheckSquareTwoTone">
          <CheckSquareTwoTone />
        </Variant>
        <Variant name="ClockCircleTwoTone">
          <ClockCircleTwoTone />
        </Variant>
        <Variant name="WarningTwoTone">
          <WarningTwoTone />
        </Variant>
        <Variant name="StopTwoTone">
          <StopTwoTone />
        </Variant>
        <Variant name="EditTwoTone">
          <EditTwoTone />
        </Variant>
        <Variant name="CopyTwoTone">
          <CopyTwoTone />
        </Variant>
        <Variant name="DeleteTwoTone">
          <DeleteTwoTone />
        </Variant>
        <Variant name="SnippetsTwoTone">
          <SnippetsTwoTone />
        </Variant>
        <Variant name="DiffTwoTone">
          <DiffTwoTone />
        </Variant>
        <Variant name="HighlightTwoTone">
          <HighlightTwoTone />
        </Variant>
        <Variant name="PieChartTwoTone">
          <PieChartTwoTone />
        </Variant>
        <Variant name="BoxPlotTwoTone">
          <BoxPlotTwoTone />
        </Variant>
        <Variant name="FundTwoTone">
          <FundTwoTone />
        </Variant>
        <Variant name="SlidersTwoTone">
          <SlidersTwoTone />
        </Variant>
        <Variant name="Html5TwoTone">
          <Html5TwoTone />
        </Variant>
        <Variant name="AccountBookTwoTone">
          <AccountBookTwoTone />
        </Variant>
        <Variant name="AlertTwoTone">
          <AlertTwoTone />
        </Variant>
        <Variant name="ApiTwoTone">
          <ApiTwoTone />
        </Variant>
        <Variant name="AppstoreTwoTone">
          <AppstoreTwoTone />
        </Variant>
        <Variant name="AudioTwoTone">
          <AudioTwoTone />
        </Variant>
        <Variant name="BankTwoTone">
          <BankTwoTone />
        </Variant>
        <Variant name="BellTwoTone">
          <BellTwoTone />
        </Variant>
        <Variant name="BookTwoTone">
          <BookTwoTone />
        </Variant>
        <Variant name="BugTwoTone">
          <BugTwoTone />
        </Variant>
        <Variant name="BuildTwoTone">
          <BuildTwoTone />
        </Variant>
        <Variant name="BulbTwoTone">
          <BulbTwoTone />
        </Variant>
        <Variant name="CalculatorTwoTone">
          <CalculatorTwoTone />
        </Variant>
        <Variant name="CalendarTwoTone">
          <CalendarTwoTone />
        </Variant>
        <Variant name="CameraTwoTone">
          <CameraTwoTone />
        </Variant>
        <Variant name="CarTwoTone">
          <CarTwoTone />
        </Variant>
        <Variant name="CarryOutTwoTone">
          <CarryOutTwoTone />
        </Variant>
        <Variant name="CiCircleTwoTone">
          <CiCircleTwoTone />
        </Variant>
        <Variant name="CiTwoTone">
          <CiTwoTone />
        </Variant>
        <Variant name="CloudTwoTone">
          <CloudTwoTone />
        </Variant>
        <Variant name="CreditCardTwoTone">
          <CreditCardTwoTone />
        </Variant>
        <Variant name="CrownTwoTone">
          <CrownTwoTone />
        </Variant>
        <Variant name="CustomerServiceTwoTone">
          <CustomerServiceTwoTone />
        </Variant>
        <Variant name="DashboardTwoTone">
          <DashboardTwoTone />
        </Variant>
        <Variant name="DatabaseTwoTone">
          <DatabaseTwoTone />
        </Variant>
        <Variant name="CodeTwoTone">
          <CodeTwoTone />
        </Variant>
        <Variant name="CompassTwoTone">
          <CompassTwoTone />
        </Variant>
        <Variant name="ContactsTwoTone">
          <ContactsTwoTone />
        </Variant>
        <Variant name="ContainerTwoTone">
          <ContainerTwoTone />
        </Variant>
        <Variant name="ControlTwoTone">
          <ControlTwoTone />
        </Variant>
        <Variant name="DislikeTwoTone">
          <DislikeTwoTone />
        </Variant>
        <Variant name="DollarCircleTwoTone">
          <DollarCircleTwoTone />
        </Variant>
        <Variant name="DollarTwoTone">
          <DollarTwoTone />
        </Variant>
        <Variant name="EnvironmentTwoTone">
          <EnvironmentTwoTone />
        </Variant>
        <Variant name="EuroCircleTwoTone">
          <EuroCircleTwoTone />
        </Variant>
        <Variant name="EuroTwoTone">
          <EuroTwoTone />
        </Variant>
        <Variant name="ExperimentTwoTone">
          <ExperimentTwoTone />
        </Variant>
        <Variant name="EyeTwoTone">
          <EyeTwoTone />
        </Variant>
        <Variant name="EyeInvisibleTwoTone">
          <EyeInvisibleTwoTone />
        </Variant>
        <Variant name="FileAddTwoTone">
          <FileAddTwoTone />
        </Variant>
        <Variant name="FileExcelTwoTone">
          <FileExcelTwoTone />
        </Variant>
        <Variant name="FileExcelTwoTone">
          <FileExclamationTwoTone />
        </Variant>
        <Variant name="FileTwoTone">
          <FileTwoTone />
        </Variant>
        <Variant name="FileImageTwoTone">
          <FileImageTwoTone />
        </Variant>
        <Variant name="FileMarkdownTwoTone">
          <FileMarkdownTwoTone />
        </Variant>
        <Variant name="FilePdfTwoTone">
          <FilePdfTwoTone />
        </Variant>
        <Variant name="FilePptTwoTone">
          <FilePptTwoTone />
        </Variant>
        <Variant name="FileTextTwoTone">
          <FileTextTwoTone />
        </Variant>
        <Variant name="FileUnknownTwoTone">
          <FileUnknownTwoTone />
        </Variant>
        <Variant name="FileWordTwoTone">
          <FileWordTwoTone />
        </Variant>
        <Variant name="FileZipTwoTone">
          <FileZipTwoTone />
        </Variant>
        <Variant name="FilterTwoTone">
          <FilterTwoTone />
        </Variant>
        <Variant name="FireTwoTone">
          <FireTwoTone />
        </Variant>
        <Variant name="FlagTwoTone">
          <FlagTwoTone />
        </Variant>
        <Variant name="FolderAddTwoTone">
          <FolderAddTwoTone />
        </Variant>
        <Variant name="FolderTwoTone">
          <FolderTwoTone />
        </Variant>
        <Variant name="FolderOpenTwoTone">
          <FolderOpenTwoTone />
        </Variant>
        <Variant name="FrownTwoTone">
          <FrownTwoTone />
        </Variant>
        <Variant name="FunnelPlotTwoTone">
          <FunnelPlotTwoTone />
        </Variant>
        <Variant name="GiftTwoTone">
          <GiftTwoTone />
        </Variant>
        <Variant name="GoldTwoTone">
          <GoldTwoTone />
        </Variant>
        <Variant name="HddTwoTone">
          <HddTwoTone />
        </Variant>
        <Variant name="HeartTwoTone">
          <HeartTwoTone />
        </Variant>
        <Variant name="HomeTwoTone">
          <HomeTwoTone />
        </Variant>
        <Variant name="HourglassTwoTone">
          <HourglassTwoTone />
        </Variant>
        <Variant name="IdcardTwoTone">
          <IdcardTwoTone />
        </Variant>
        <Variant name="InsuranceTwoTone">
          <InsuranceTwoTone />
        </Variant>
        <Variant name="InteractionTwoTone">
          <InteractionTwoTone />
        </Variant>
        <Variant name="LayoutTwoTone">
          <LayoutTwoTone />
        </Variant>
        <Variant name="LikeTwoTone">
          <LikeTwoTone />
        </Variant>
        <Variant name="LockTwoTone">
          <LockTwoTone />
        </Variant>
        <Variant name="MailTwoTone">
          <MailTwoTone />
        </Variant>
        <Variant name="MedicineBoxTwoTone">
          <MedicineBoxTwoTone />
        </Variant>
        <Variant name="MehTwoTone">
          <MehTwoTone />
        </Variant>
        <Variant name="MessageTwoTone">
          <MessageTwoTone />
        </Variant>
        <Variant name="MobileTwoTone">
          <MobileTwoTone />
        </Variant>
        <Variant name="MoneyCollectTwoTone">
          <MoneyCollectTwoTone />
        </Variant>
        <Variant name="NotificationTwoTone">
          <NotificationTwoTone />
        </Variant>
        <Variant name="PhoneTwoTone">
          <PhoneTwoTone />
        </Variant>
        <Variant name="PictureTwoTone">
          <PictureTwoTone />
        </Variant>
        <Variant name="PlaySquareTwoTone">
          <PlaySquareTwoTone />
        </Variant>
        <Variant name="PoundCircleTwoTone">
          <PoundCircleTwoTone />
        </Variant>
        <Variant name="PrinterTwoTone">
          <PrinterTwoTone />
        </Variant>
        <Variant name="ProfileTwoTone">
          <ProfileTwoTone />
        </Variant>
        <Variant name="ProjectTwoTone">
          <ProjectTwoTone />
        </Variant>
        <Variant name="PropertySafetyTwoTone">
          <PropertySafetyTwoTone />
        </Variant>
        <Variant name="PushpinTwoTone">
          <PushpinTwoTone />
        </Variant>
        <Variant name="ReconciliationTwoTone">
          <ReconciliationTwoTone />
        </Variant>
        <Variant name="RedEnvelopeTwoTone">
          <RedEnvelopeTwoTone />
        </Variant>
        <Variant name="RestTwoTone">
          <RestTwoTone />
        </Variant>
        <Variant name="RocketTwoTone">
          <RocketTwoTone />
        </Variant>
        <Variant name="SafetyCertificateTwoTone">
          <SafetyCertificateTwoTone />
        </Variant>
        <Variant name="SaveTwoTone">
          <SaveTwoTone />
        </Variant>
        <Variant name="ScheduleTwoTone">
          <ScheduleTwoTone />
        </Variant>
        <Variant name="SecurityScanTwoTone">
          <SecurityScanTwoTone />
        </Variant>
        <Variant name="SettingTwoTone">
          <SettingTwoTone />
        </Variant>
        <Variant name="ShopTwoTone">
          <ShopTwoTone />
        </Variant>
        <Variant name="ShoppingTwoTone">
          <ShoppingTwoTone />
        </Variant>
        <Variant name="SkinTwoTone">
          <SkinTwoTone />
        </Variant>
        <Variant name="SmileTwoTone">
          <SmileTwoTone />
        </Variant>
        <Variant name="SoundTwoTone">
          <SoundTwoTone />
        </Variant>
        <Variant name="StarTwoTone">
          <StarTwoTone />
        </Variant>
        <Variant name="SwitcherTwoTone">
          <SwitcherTwoTone />
        </Variant>
        <Variant name="TabletTwoTone">
          <TabletTwoTone />
        </Variant>
        <Variant name="TagTwoTone">
          <TagTwoTone />
        </Variant>
        <Variant name="TagsTwoTone">
          <TagsTwoTone />
        </Variant>
        <Variant name="ThunderboltTwoTone">
          <ThunderboltTwoTone />
        </Variant>
        <Variant name="ToolTwoTone">
          <ToolTwoTone />
        </Variant>
        <Variant name="TrademarkCircleTwoTone">
          <TrademarkCircleTwoTone />
        </Variant>
        <Variant name="TrophyTwoTone">
          <TrophyTwoTone />
        </Variant>
        <Variant name="UnlockTwoTone">
          <UnlockTwoTone />
        </Variant>
        <Variant name="UsbTwoTone">
          <UsbTwoTone />
        </Variant>
        <Variant name="VideoCameraTwoTone">
          <VideoCameraTwoTone />
        </Variant>
        <Variant name="WalletTwoTone">
          <WalletTwoTone />
        </Variant>
      </Component>
    </Category>
  </Palette>
);

export default palette;
