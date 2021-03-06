## CUIKit Development Roadmap

iOS Frameworks: [Clicky](https://developer.apple.com/library/ios/documentation/Miscellaneous/Conceptual/iPhoneOSTechOverview/iPhoneOSFrameworks/iPhoneOSFrameworks.html#//apple_ref/doc/uid/TP40007898-CH6-SW3)

### Components
- Core Animation
   - Animator?
- Core Data
   - SQLite?
   - Database?
- Core Graphics
   - [Done] `CGGeometry`
      - [Done] `CGPoint`
      - [Done] `CGRect`
      - [Done] `CGSize`
- Foundation Kit
   - [Done] `NSObject`
      - `NSAttributedString` -- Colored string
      - `NSData`?
      - `NSDate`
      - `NSDictionary`?
      - `NSFileManager`
      - `NSFormatter`?
      - `NSIndexPath`?
      - `NSProcessInfo`
      - `NSString`?
      - `NSTimer`?
      - `NSThread`
      - `NSURL`
      - `NSUserDefaults`?
   - `NSValue`? / `NSNumber`?
- Application Kit (AppKit)
   - `NSLayoutConstraint`
- Text Kit
   - `NSTextStorage` (Store text and attributes)
   - `NSLayoutManager` (Takes the text and lay them down on container)
   - `NSTextContainer` (Describe a shape, supplies as line fragments to layout manager)
- UI Kit (UIKit)
   - `UIBarItem`
      - `UIBarButtonItem`
      - `UITabBarItem`
   - [Done] `UIColor`
   - `UIGestureRecognizer`
      - `UIPressRecognizer`? (Keyboard event)
   - `UIKeyCommand`?
   - `UIPopoverController`
   - `UIPresentationController`
   - `UIPress`?
   - [WIP] `UIApplication`
   - [WIP] `UIView`
      - `UIActivityIndicatorView`
      - `UIControl`
         - `UIButton`
         - `UIPageControl`
         - `UISegmentedControl`
         - `UISlider`
         - `UISwitch`
         - `UITextField`
      - [WIP] `UILabel`
      - `UIPickerView`
      - `UIProgressView`
      - `UIScrollView`
         - `UITableView`
         - `UITextView`
      - `UITabBar`
      - `UITableViewCell`
      - [Done?] `UIWindow`
   - [WIP] `UIViewController`
      - `UIActivityIndicatorController`?
      - `UIAlertController`
   - [Done] `UIScreen`
